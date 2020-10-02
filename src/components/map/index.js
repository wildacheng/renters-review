import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
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
      <LocationOnOutlinedIcon fontSize="large" />
      <p className="pin-text">{text}</p>
    </div>
  );

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        defaultCenter={location}
        defaultZoom={17}
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
