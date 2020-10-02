import React from "react";
import Map from "../map";
import Footer from "../footer";
import {
  Divider,
} from "@material-ui/core";
import { useStyles } from "./utils";

const Reviews = (props) => {
  const address = props.location.state.address;
  const lat = props.location.state.lat;
  const lng = props.location.state.lng;
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.grid}>
        <div className={classes.reviewsList}>LIST OF REVIEWS COMING SOON!</div>
        <Divider className={classes.divider} orientation="vertical"  />
        <div className={classes.map}>
          <Map address={address} lat={lat} lng={lng} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Reviews;
