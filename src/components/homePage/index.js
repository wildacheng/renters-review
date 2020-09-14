import React from "react";
import SearchBar from "../searchBar";
import BlogCarousel from "../blogCarousel";
import Footer from "../footer";
import "./style.css";

//material.ui
import { makeStyles, Grid } from "@material-ui/core";
//

const useStyles = makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  searchGrid: {
    width: "auto",
    justifyContent: "center",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "75%",
  },
})

const HomePage = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 650);

  const classes = useStyles();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="backgroundImage">
            <div className={classes.searchContainer}>
              <div className="titleContainer">
                <div>Real reviews to help you</div>
                <div>find the perfect home.</div>
              </div>
              <Grid container className={classes.searchGrid}>
                <Grid item xs={7} sm={8} md={12} lg={12}>
                  <SearchBar />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      {isDesktop && <BlogCarousel />}
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
