import React from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import SearchBar from "../searchBar";
import Footer from "../footer";
import { useStyles } from "./utils";
import "./style.css";

const SearchForm = ({ history }) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const classes = useStyles();

  const handleClick = () => {
    history.push({
      pathname: "/writeareview",
      state: {
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    });
  };

  return (
    <React.Fragment>
      <Grid container className={classes.grid} justify="center">
        <div className="reviewBackgroundImage">
          <div className="searchContainer">
            <div className={classes.titleContainer}>
              <div>Begin your review</div>
              <div className={classes.subTitle}>
                Search for an address and share your experience
              </div>
            </div>
            <Grid container className={classes.searchGrid}>
              <Grid item xs={7} sm={8} md={12} lg={12}>
                <SearchBar
                  address={address}
                  setAddress={setAddress}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  handleClick={handleClick}
                  placeholder="Enter a full address"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(SearchForm);
