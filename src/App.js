import React from 'react';
import { Navbar } from './components'
import Routes from './routes'
import scriptLoader from 'react-async-script-loader';

function App({ isScriptLoaded, isScriptLoadSucceed}) {
  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes />
        </header>
      </div>
    );
  } else{
    return (
      <div className="App">
      </div>
    )
  }
}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_STATIC_MAP}&libraries=places`])(App);
