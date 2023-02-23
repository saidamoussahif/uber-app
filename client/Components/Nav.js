import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import Register from "../screens/Register";
import MapScreen from "../screens/MapScreen";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
// import {green} from "./Constants.js"


const Tab = createBottomTabNavigator();


function Nav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Register') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } 
		  else if (route.name === 'MapScreen') {
			iconName = focused ? 'map' : 'map-outline';
		  				}
	return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#AACB73",
        inactiveTintColor: 'gray',
      }}
    >
			  <Tab.Screen name="Home" component={HomeScreen} />
			  <Tab.Screen name="Login" component={Login} />
			  <Tab.Screen name="Register" component={Register} />
			  <Tab.Screen name="MapScreen" component={MapScreen} />

        </Tab.Navigator>


  );
}

export default Nav;