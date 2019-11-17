import React, { Component } from "react";
import { Picker, View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class ReportScreen extends Component {
  state = {
    area: "",
    type: "",
    rowdy: "",
    comment: "",
    location: ""
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location }, () => {
      console.log("location", this.state);
    });
  };

  onSubmit = e => {
    this.setState(
      {
        policeID: "123",
        fingerPrintID: "345"
      },
      () => {
        axios
          .post("https://india-police.herokuapp.com/api/validation", this.state)
          .then(res => console.log("res", res.data))
          .catch(err => console.log("err", err));
      }
    );
  };

  render() {
    return (
      <View style={{ marginLeft: 100, marginTop: 200 }}>
        <Picker
          style={{ paddingTop: 25 }}
          selectedValue={this.state.area}
          onValueChange={area => this.setState({ area })}
          style={{ width: 160 }}
          mode="dropdown"
        >
          <Picker.Item label="Beat Area" value="" />
          <Picker.Item label="Kathriguppe" value="Kathriguppe" />
          <Picker.Item label="Hoskerehalli" value="Hoskerehalli" />
        </Picker>

        <Picker
          style={{ paddingTop: 25 }}
          selectedValue={this.state.type}
          onValueChange={type => this.setState({ type })}
          style={{ width: 160 }}
          mode="dropdown"
        >
          <Picker.Item label="Crime type" value="" />
          <Picker.Item label="Rowdy Sheeter" value="Rowdy Sheeter" />
          <Picker.Item label="Mob" value="Mob" />
        </Picker>

        <Picker
          style={{ paddingTop: 25 }}
          selectedValue={this.state.rowdy}
          onValueChange={rowdy => this.setState({ rowdy })}
          style={{ width: 160 }}
          mode="dropdown"
        >
          <Picker.Item label="Rowdy" value="" />
          <Picker.Item label="Kothval" value="Kothval" />
          <Picker.Item label="Jairaj" value="Jairaj" />
        </Picker>

        <TextInput
          value={this.state.comment}
          onChangeText={comment => this.setState({ comment })}
          placeholder="comment"
          style={{
            width: 200,
            fontSize: 20,
            height: 100,
            padding: 10,
            borderWidth: 1,
            marginVertical: 10
          }}
        />

        <TouchableOpacity
          style={{
            alignItems: "center",
            width: 200,
            height: 30,
            padding: 10,
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 25,
            marginBottom: 10
          }}
          onPress={this.onSubmit.bind(this)}
        >
          <Text> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
