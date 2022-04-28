import { Map, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  render() {
    const style = {
      width:"275px",
      height:"260px",
 
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={14}
        initialCenter={{
          lat: 50.77973,
          lng: 6.10036,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCNJ17imkPTaglvxu3wrqmYUmYg7hZYu5M",
})(MapContainer);
