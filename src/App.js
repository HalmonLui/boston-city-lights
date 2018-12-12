import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleMapReact, Map } from "google-map-react";

import MapContainer from "./components/MapContainer";
import FooterContainer from "./components/FooterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={require("./images/boston-lights-logo.png")}
            style={{ width: "200px" }}
          />
        </header>
        <body>
          <MapContainer />
        </body>
        <footer>
          <FooterContainer />
        </footer>
      </div>
    );
  }
}

export default App;
