import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "none",
  marginTop: "14%",
  width: "90%",
  height: "50%"
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 42.3601,
            lng: -71.0589
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDTVczXE4vhnwXkY17_Db96U_dlMQ7MnKU"
})(MapContainer);
