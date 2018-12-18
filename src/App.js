import React, { Component } from "react";
import "./App.css";

import MapContainer from "./components/MapContainer";
import FooterContainer from "./components/FooterContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  componentDidMount() {
    this.setState({
      lights: [
        {
          lat: 42.3601,
          lng: -71.0589
        },
        {
          lat: 42.3605,
          lng: -71.0589
        }
      ]
    });
  }

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
              /* Single Marker
              var marker = new window.google.maps.Marker({
                position: { lat: 42.3601, lng: -71.0589 },
                map: map,
                icon: {
                  url: "https://static.thenounproject.com/png/161116-200.png",
                  scaledSize: new window.google.maps.Size(50, 50)
                }
              }); */
              this.state.lights.forEach(function(light) {
                var marker = new window.google.maps.Marker({
                  position: { lat: light.lat, lng: light.lng },
                  icon: {
                    url: "https://static.thenounproject.com/png/161116-200.png",
                    scaledSize: new window.google.maps.Size(50, 50)
                  },
                  map: map
                });
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
