import React, { Component } from 'react';

class GoogleMap extends Component {
  // A lifecycle method thats gets called automaticlly 
  // after this component has been rendered on the screen.
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;