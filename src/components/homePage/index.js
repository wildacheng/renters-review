import React from "react";
import SearchBar from "../searchBar";
import BlogCarousel from "../blogCarousel";
import Footer from "../footer";
import "./style.css";

//material.ui
import { makeStyles, Typography, Grid, Box, fade } from "@material-ui/core";
//

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#ffffff",
    fontFamily: "Century Gothic Std",
    fontWeight: "600",
    fontSize: "xxx-large",
    textShadow: "4px 4px 4px #000000",
  },
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  searchGrid: {
    width: "auto",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
}));


const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="backgroundImage">
            <div className={classes.searchContainer}>
              <div className={classes.titleContainer}>
                <Typography className={classes.title}>
                  Real reviews to help you
                </Typography>
                <Typography className={classes.title}>
                  find the perfect home.
                </Typography>
              </div>
              <Grid container className={classes.searchGrid}>
                <Grid item xs={6} sm={8} md={12} lg={12}>
                  <SearchBar />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      <BlogCarousel />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
