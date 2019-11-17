import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class TrackeeScreen extends Component {
  state = {
    location: null,
    latitude: null,
    longitude: null,
    error: null,
    coords: null
  };

  componentWillMount() {
    console.log('pos',this.state.coords)
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coords: position.coords,
          
          error: null
        });
        
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false }
    );
      console.log('state', this.state)
    // this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      coords: location.coords,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  };

  render() {
    console.log('state',this.state)
    return (
      <View style={styles.container}>
        {this.state.coords ? (
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker coordinate={this.state.coords} />
          </MapView>
        ) : (
          <Text>Wait...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
