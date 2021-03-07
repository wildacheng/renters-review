package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/chent03/apt-server/controllers"
	"github.com/chent03/apt-server/middleware"
	"github.com/chent03/apt-server/models"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)

	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		// if we got an error (that wasn't that the file doesn't exist) stating the
		// file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello world")
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Print(".env file missing")
	}
	postgresInfo := getDBConnectionInfo()
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=enable",
		postgresInfo.host, postgresInfo.port, postgresInfo.user, postgresInfo.password, postgresInfo.name)

	services, err := models.NewServices(psqlInfo)
	if err != nil {
		panic(err)
	}
	defer services.Close()
	services.DestructiveReset()
	userC := controllers.NewUsers(services.User)
	reviewC := controllers.NewReviews(services.Review)

	requireUserMw := middleware.RequireUser{
		UserService: services.User,
	}

	getUserInfo := requireUserMw.ApplFn(userC.GetUserInfo)
	createReview := requireUserMw.ApplFn(reviewC.Create)
	getUserReview := requireUserMw.ApplFn(reviewC.GetByUserID)

	r := mux.NewRouter()
	r.HandleFunc("/api/register", userC.Register).Methods("POST")
	r.HandleFunc("/api/signIn", userC.Login).Methods("POST")
	r.HandleFunc("/api/getUserInfo", getUserInfo).Methods("GET")
	r.HandleFunc("/api/review", createReview).Methods("POST")
	r.HandleFunc("/api/getUserReviews", getUserReview).Methods("GET")
	r.HandleFunc("/api/getAllReviews", reviewC.GetReviews).Methods("GET")

	spa := spaHandler{staticPath: "./web", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)

	// handler := cors.New(cors.Options{
	// 	AllowedOrigins:   []string{"http://localhost:*", "https://*.herokuapp.com"},
	// 	AllowedMethods:   []string{"POST", "GET", "OPTIONS", "PUT"},
	// 	AllowedHeaders:   []string{"Accept", "X-Requested-With", "Authorization", "Accept-Language", "Content-Type", "Access-Control-Allow-Origin", "Set-Cookie"},
	// 	ExposedHeaders:   []string{"Set-Cookie", "remember_token"},
	// 	AllowCredentials: true,
	// }).Handler(r)

	http.ListenAndServe(":"+GetPortNumber(), r)
}
