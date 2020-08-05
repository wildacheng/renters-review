import React from "react";
import ReactStreetview from 'react-streetview';


  class GoogleMap extends React.Component {
    render() {
      // see https://developers.google.com/maps/documentation/javascript
      const googleMapsApiKey = process.env.REACT_APP_GOOGLE_STATIC_MAP;

      // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
      const streetViewPanoramaOptions = {
          position: {lat: 46.9171876, lng: 17.8951832},
          pov: {heading: 100, pitch: 0},
          zoom: 1
      };

      return (
        <div style={{
          width: '800px',
          height: '450px',
          backgroundColor: '#eeeeee'
      }}>
          <ReactStreetview
              apiKey={googleMapsApiKey}
              streetViewPanoramaOptions={streetViewPanoramaOptions}
          />
      </div>
      );
    }
  }



export default GoogleMap;
