import "react-native-gesture-handler";
// import React from "react";
// import {View, Text, Button} from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {HomeScreen, DemoScreen, TestScreen} from "./screens";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Demo: {
      screen: DemoScreen,
    },
    Test: {
      screen: TestScreen,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
