import React from "react";
import Map from "../map";
import Footer from "../footer";

const Reviews = (props) => {
  const address = props.location.state.address;
  const lat = props.location.state.lat;
  const lng = props.location.state.lng;


  return (
    <div>
      <Map address={address} lat={lat} lng={lng} />
      <Footer />
    </div>
  );
};

export default Reviews;
