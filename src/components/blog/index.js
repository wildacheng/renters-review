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
import { Articles } from "./utils";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(6),
    textAlign: "center",
  },
}));

const Blog = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 650);

  const classes = useStyles();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
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
          <div style={{ marginTop: "50px" }}>
            <BlogCarousel />
          </div>
        </Grid>
      )}
      {Articles.map((article) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={3}
          style={{ maxWidth: "700px" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="blog article"
                height="300"
                image={article.image}
                title="Blog Article"
                onClick={handleClick(article.URL)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
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
