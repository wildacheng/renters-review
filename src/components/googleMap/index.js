import React from "react";
import ReactStreetview from "react-streetview";

const GoogleMap = (props) => {

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: props.location.state.lat, lng: props.location.state.lng },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  return (
    <div
      style={{
        width: "800px",
        height: "450px",
        backgroundColor: "#eeeeee",
      }}
    >
      <ReactStreetview
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
};

export default GoogleMap;
