import React from 'react';
import { Navbar } from './components'
import Routes from './routes'
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes />
      </header>
    </div>
  );
}

export default App;
