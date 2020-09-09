import React from "react";
import { Navbar } from "./components";
import Routes from "./routes";
import scriptLoader from "react-async-script-loader";

function App({ isScriptLoaded, isScriptLoadSucceed }) {
  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
          <Navbar />
          <Routes />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(App);
