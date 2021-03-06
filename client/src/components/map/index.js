import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./style.css";

const Map = (props) => {
  const { address, lat, lng } = props;
  const location = {
    address: address,
    lat: lat,
    lng: lng,
  };

  const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationOnIcon fontSize="large" color={"error"}/>
      <p className="pin-text">{text}</p>
    </div>
  );

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        defaultCenter={location}
        defaultZoom={15}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
