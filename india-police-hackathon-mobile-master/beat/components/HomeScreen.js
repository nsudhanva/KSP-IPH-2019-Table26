import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends Component {  
  static navigationOptions = {  
       title: 'Home',  
  };  
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
              <Text>Home</Text>  
          </View>  
      );  
  }  
}  

export default HomeScreen