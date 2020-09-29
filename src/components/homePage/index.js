import React from "react";
import { withRouter } from "react-router-dom";
import SearchBar from "../searchBar";
import BlogCarousel from "../blogCarousel";
import Footer from "../footer";
import { useStyles } from "./utils";
import "./style.css";

//material.ui
import { Grid } from "@material-ui/core";

const HomePage = ({history}) => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 650);
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const classes = useStyles();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleClick = () => {
    history.push({
      pathname: "/reviews",
      state: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    });
  };

  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="backgroundImage">
            <div className="searchContainer">
              <div id="titleContainer">
                <div>Find your next home.</div>
                <div style={{fontSize: "22px", fontWeight: "800", color:"white", lineHeight: "1.875", textShadow: "4px 4px 15px #000000"}}>Real people. Real reviews </div>
              </div>
              <Grid container className={classes.searchGrid}>
                <Grid item xs={7} sm={8} md={12} lg={12}>
                  <SearchBar
                  address={address}
                  setAddress={setAddress}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  handleClick={handleClick}
                  placeholder="Enter an address to search reviews" />
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

export default withRouter(HomePage);
