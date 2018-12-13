import React, { Component } from "react";
import "./App.css";

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
            alt="Boston Lights"
          />
        </header>
        <body>
          <MapContainer
            id="map"
            options={{
              center: { lat: 42.3601, lng: -71.0589 },
              zoom: 14
            }}
            onMapLoad={map => {
              var marker = new window.google.maps.Marker({
                position: { lat: 42.3601, lng: -71.0589 },
                map: map,
                title: "Hello Boston!"
              });
            }}
          />
        </body>
        <footer>
          <FooterContainer />
        </footer>
      </div>
    );
  }
}

export default App;
