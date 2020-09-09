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
import Footer from "../footer"

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  media: {
    height: 300,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <Grid container spacing={5} alignItems="center"
      justify="center"
      >
        <Grid item xs={12}>
          <div style={{ marginTop: "50px" }}>
            <BlogCarousel />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.simplyss.com/blog/wp-content/uploads/2017/10/people_moving_boxes-copy.jpg"
                title="People Moving"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  How to Get Your First Apartment
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Renting your first apartment can allow you greater freedom and
                  flexibility, but if you haven't done it before, it can seem
                  like a daunting process.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.simplyss.com/blog/wp-content/uploads/2017/10/people_moving_boxes-copy.jpg"
                title="People Moving"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  How to Get Your First Apartment
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Renting your first apartment can allow you greater freedom and
                  flexibility, but if you haven't done it before, it can seem
                  like a daunting process.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.simplyss.com/blog/wp-content/uploads/2017/10/people_moving_boxes-copy.jpg"
                title="People Moving"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  How to Get Your First Apartment
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Renting your first apartment can allow you greater freedom and
                  flexibility, but if you haven't done it before, it can seem
                  like a daunting process.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Footer />
      </Grid>
  );
};

export default Blog;
