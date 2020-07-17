import React from "react";
import "./style.css"
import {
  Card,
  Button,
  CardMedia,
  makeStyles,
  Typography,
  CardContent,
  CardActions,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 550,
  },
  media: {
    height: 300,
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "50px",
    paddingBottom: "50px",
    alignItems: "flex-end",
  },
  blogTitle: {
    fontWeight: 900,
    fontSize: "25px",
  }
});

const FeatureBlog = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div>
          <Typography className={classes.blogTitle}>Featured Blogs</Typography>
          <Card className={classes.root}>
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
                Renting your first apartment can allow you greater freedom and flexibility, but if you haven't done it before, it can seem like a daunting process.
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
        </div>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://i.pinimg.com/originals/22/30/54/22305418269cbc153015646ab1b2e54d.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
        </div>
      </div>
    </div>
  );
};

export default FeatureBlog;
