import React from "react";
import GoogleMap from "../googleMap";
import Footer from "../footer";

const Reviews = (props) => {
  const lat = props.location.state.lat;
  const lng = props.location.state.lng;

  return (
    <div>
      <GoogleMap lat={lat} lng={lng} />
      <Footer />
    </div>
  );
};

export default Reviews;
