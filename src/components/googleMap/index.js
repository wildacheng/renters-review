import React, { Component } from "react";
import {Loader, LoaderOptions} from 'google-maps';
// import { StaticGoogleMap, Marker, Path } from "react-static-google-map";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const options = {}
const loader = new Loader("AIzaSyDcm3kaMrc3tR8jPVUA-Tlf4DBvgWDGMKI", options);



  class GoogleMap extends Component {
    async componentDidMount () {
      const google = await loader.load();

    //   const map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8,
    // });
    new google.maps.StreetViewPanorama(document.getElementById('map'), {
      position: { lat: 42.345573, lng: -71.098326 },
      pov: {heading: 34,
        pitch: 10
      }
    } )
    }

    // static defaultProps = {
    //   center: {
    //     lat: 59.95,
    //     lng: 30.33
    //   },
    //   zoom: 11
    // };

    render() {
      return (
        <div id="map"/>





        // Important! Always set the container height explicitly
        // <div style={{ height: '100vh', width: '100%' }}>
        //   <GoogleMapReact
        //     bootstrapURLKeys={{ key: "AIzaSyDcm3kaMrc3tR8jPVUA-Tlf4DBvgWDGMKI" }}
        //     defaultCenter={this.props.center}
        //     defaultZoom={this.props.zoom}
        //   >
        //     <AnyReactComponent
        //       lat={59.955413}
        //       lng={30.337844}
        //       text="My Marker"
        //     />
        //   </GoogleMapReact>
        // </div>
      );
    }
  }

  // export default SimpleMap;

export default GoogleMap;
