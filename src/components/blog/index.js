import React from "react";
import "./style.css";
import {
  Card,
  Grid,
  Button,
  CardMedia,
  makeStyles,
  Typography,
  CardContent,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import BlogCarousel from "../blogCarousel";
import Footer from "../footer";
import { GlobalContext } from "../../globalContext";
import { Articles } from "./utils";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "550px",
    padding: theme.spacing(5),
    margin: theme.spacing(5),
    textAlign: "center",
    boxShadow: "0px 2px 20px rgba(150,150,150,0.2)",
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "5%",
    color: "#32373c",
  },
}));

const Blog = () => {
  const { isDesktop, setIsDesktop } = React.useContext(GlobalContext);

  const classes = useStyles();

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 760);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleClick = (pageUrl) => () => {
    window.open(pageUrl, "blank");
  };

  return (
    <Grid container justify="center">
      {isDesktop && (
        <Grid item xs={12}>
          <div>
            <BlogCarousel />
          </div>
        </Grid>
      )}
      {Articles.map((article) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={3}
          style={{ maxWidth: "650px" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                key={article.name}
                component="img"
                alt="blog article"
                height="300"
                image={article.image}
                title="Blog Article"
                onClick={handleClick(article.URL)}
              />
              <CardContent>
                <Typography className={classes.title}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="inherit">
                Share
              </Button>
              <Button
                size="small"
                color="inherit"
                onClick={handleClick(article.URL)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Footer />
    </Grid>
  );
};

export default Blog;
