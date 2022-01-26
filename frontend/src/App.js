import React from 'react';
import './App.css';

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import Startpage from './pages/StartPage';


function App() {


  return (
    <div className="App">
    <ResponsiveAppBar />
    <Startpage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <Footer />
    </div>
  );
}

export default App;
