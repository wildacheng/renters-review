import React from "react";
import SearchBar from "../searchBar";
import BlogCarousel from "../blogCarousel";
import Footer from "../footer"
import GoogleMap from "../googleMap"
import "./style.css";

//material.ui
import {
  makeStyles,
  Typography,
  Box,
  fade,
} from "@material-ui/core";
//

const useStyles = makeStyles((theme) => ({
  logo: {
    position: "absolute",
    top: "35%",
    color: "#ffffff",
    backgroundColor: fade(theme.palette.common.black, 0.65),
  }
}));
//

const HomePage = () => {
  const classes = useStyles();

  // const googleMapsApiKey = AIzaSyDcm3kaMrc3tR8jPVUA-Tlf4DBvgWDGMKI

  return (
    <div>
      <img
        id="image"
        src="https://cdn.home-designing.com/wp-content/uploads/2018/04/Taupe-sofa.jpg"
      />
      <div className="search-container">
        <Typography className={classes.logo} component="div">
          <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
            Real reviews to help you find the perfect home.
          </Box>
        </Typography>
        <SearchBar />
        <GoogleMap />
      </div>
      <BlogCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
