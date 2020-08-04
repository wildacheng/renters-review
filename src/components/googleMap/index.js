import React from "react";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

const GoogleMap = () => {
  return (
    <div>
      <StaticGoogleMap
        size="600x600"
        className="img-fluid"
        apiKey="AIzaSyDcm3kaMrc3tR8jPVUA-Tlf4DBvgWDGMKI"
      >
        <Marker location="6.4488387,3.5496361" color="blue" label="P" />
      </StaticGoogleMap>

      <StaticGoogleMap size="600x600" apiKey="YOUR_API_KEY">
        <Marker.Group label="T" color="brown">
          <Marker location="40.737102,-73.990318" />
          <Marker location="40.749825,-73.987963" />
        </Marker.Group>
      </StaticGoogleMap>

      <StaticGoogleMap
        size="600x600"
        apiKey="AIzaSyDcm3kaMrc3tR8jPVUA-Tlf4DBvgWDGMKI"
      >
        <Marker
          location={{ lat: 40.737102, lng: -73.990318 }}
          color="blue"
          label="P"
        />
        <Path
          points={[
            "40.737102,-73.990318",
            "40.749825,-73.987963",
            "40.752946,-73.987384",
            "40.755823,-73.986397",
          ]}
        />
      </StaticGoogleMap>
      {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?size=600x600&scale=1&format=png&maptype=roadmap&markers=size:normal%7Ccolor:brown%7Clabel:T%7C40.737102,-73.990318%7C40.749825,-73.987963&key=${process.env.REACT_APP_GOOGLE_STATIC_MAP}`} /> */}
      <img
        src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769
&fov=80&heading=70&pitch=0
&key=AIzaSyDcm3kaMrc3tR8jPVUA-Tlf4DBvgWDGMKI`}
      />
    </div>
  );
};

export default GoogleMap;
