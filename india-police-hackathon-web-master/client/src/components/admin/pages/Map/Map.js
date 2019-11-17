import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 12.92373,
      lng: 77.4987189
    },
    zoom: 20
  };

  handleApiLoaded = (map, maps) => {
    // console.log(map);
    // maps.addListner('click', function() {
    //   console.log('hi');
    // });
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBAYTX1UOV319IZCXVTCY03XICtY3RF0Ko' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={this.handleApiLoaded}
        >
          <AnyReactComponent
            lat={12.92373}
            lng={77.4987189}
            text="RV College"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
