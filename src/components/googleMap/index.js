import React from "react";
import ReactStreetview from "react-streetview";

const GoogleMap = ({ lat, lng }) => {
  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: lat, lng: lng },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        backgroundColor: "#eeeeee",
      }}
    >
      <ReactStreetview streetViewPanoramaOptions={streetViewPanoramaOptions} />
    </div>
  );
};

export default GoogleMap;
