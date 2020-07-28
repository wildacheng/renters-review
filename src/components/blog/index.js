import React from "react";
import "./style.css";
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
import BlogCarousel from "../blogCarousel";

const useStyles = makeStyles({
  root: {
    width: 550,
    marginRight: "25px",
  },
  media: {
    height: 300,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "15px",
    alignItems: "flex-end",
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: "75px",
  },
});

const Blog = () => {
  const classes = useStyles();

  return (
    <div style={{marginTop: "50px"}}>
      <BlogCarousel />
      <div className={classes.container}>
      <Typography variant="h2">Apartment Hunting</Typography>
        <div className={classes.row}>
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
        <Typography variant="h2">Apartment Living</Typography>
        <div className={classes.row}>
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

export default Blog;
