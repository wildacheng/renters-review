import React from "react";
import Map from "../map";
import Footer from "../footer";
import { Divider } from "@material-ui/core";
import { GlobalContext } from "../../globalContext";
import { useStyles } from "./utils";

const Reviews = (props) => {
  const { isDesktop, setIsDesktop } = React.useContext(GlobalContext);
  const address = props.location.state.address;
  const lat = props.location.state.lat;
  const lng = props.location.state.lng;
  const classes = useStyles();

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 760);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <React.Fragment>
      <div className={classes.grid}>
        {isDesktop ? (
          <React.Fragment>
            <div className={classes.reviewsList}>
              LIST OF REVIEWS COMING SOON!
            </div>
            <Divider className={classes.divider} orientation="vertical" />
            <div className={classes.map}>
              <Map address={address} lat={lat} lng={lng} />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={classes.reviewsList}>
              LIST OF REVIEWS COMING SOON!
            </div>
          </React.Fragment>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Reviews;
