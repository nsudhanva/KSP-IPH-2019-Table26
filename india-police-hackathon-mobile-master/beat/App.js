import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import HomeScreen from './components/HomeScreen'
import BeatScreen from './components/BeatScreen'
import TrackeeScreen from './components/TrackeeScreen'
import LocationScreen from './components/Location'
  
import {  
    createSwitchNavigator,  
    createAppContainer,  
    createDrawerNavigator,  
    createStackNavigator  
} from 'react-navigation';  
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  

  

const BeatStackNavigator = createStackNavigator(  
    {  
        BeatNavigator: BeatScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            ) 
        };  
        }  
    }  
);  
  
const HomeStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: HomeScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  

const TrackeeStackNavigator = createStackNavigator(  
  {  
      TrackeeNavigator: TrackeeScreen  
  },  
  {  
      defaultNavigationOptions: ({ navigation }) => {  
          return {  
              headerLeft: (  
                  <Icon  
                      style={{ paddingLeft: 10 }}  
                      onPress={() => navigation.openDrawer()}  
                      name="md-menu"  
                      size={30}  
                  />  
              )  
          };  
      }  
  }  
);  

const LocationStackNavigator = createStackNavigator(  
  {  
      LocationNavigator: LocationScreen
  },  
  {  
      defaultNavigationOptions: ({ navigation }) => {  
          return {  
              headerLeft: (  
                  <Icon  
                      style={{ paddingLeft: 10 }}  
                      onPress={() => navigation.openDrawer()}  
                      name="md-menu"  
                      size={30}  
                  />  
              )  
          };  
      }  
  }  
);  

const AppDrawerNavigator = createDrawerNavigator({  
    Beat: {  
        screen: BeatStackNavigator  
    },  
    Home: {  
        screen: HomeStackNavigator  
    }, 
    Trackee: {  
      screen: TrackeeStackNavigator  
  },  
  Location: {
    screen: LocationStackNavigator
  }
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Beat: { screen: AppDrawerNavigator },  
    Home: { screen: HomeScreen },  
    Trackee : {screen: TrackeeScreen},
    Location: {screen: LocationScreen},
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  


