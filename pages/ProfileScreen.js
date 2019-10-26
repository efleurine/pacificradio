//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
 
export default class ProfileScreen extends React.Component {
  //Profile Screen to show from Open profile button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}











import React from "react";
import "react-native-gesture-handler";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Ionicons} from "react-native-vector-icons/Ionicons";

import {MainScreen, RadioScreen, TvScreen, JournalScreen, TestScreen} from "./screens";

const MainStack = createStackNavigator({
  Main: MainScreen,
});

const RadioStack = createStackNavigator({
  Radio: RadioScreen,
});

const TVStack = createStackNavigator({
  TV: TvScreen,
});

const NationalStack = createStackNavigator({
  National: JournalScreen,
});

const TestStack = createStackNavigator({
  Test: TestScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Accueil: {screen: MainStack},
    "Radio ": {screen: RadioStack},
    Television: {screen: TVStack},
    "Le Journal": {screen: NationalStack},
    Information: {screen: TestStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      TabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === "Accueil") {
          iconName = `ios-home${focused ? "" : ""}`;
        } else if (routeName === "Television") {
          iconName = `md-tv${focused ? "" : ""}`;
        } else if (routeName === "Radio") {
          iconName = `md-radio${focused ? "" : ""}`;
        } else if (routeName === "Le Journal") {
          iconName = `ios-journal${focused ? "" : ""}`;
        } else if (routeName === "Information") {
          iconName = `ios-checkmark-circle${focused ? "" : ""}`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: "#fca010",
      inactiveTintColor: "#1e2b56",
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  App: {
    screen: TabNavigator,
  },
});

export default createAppContainer(DrawerNavigator);
import React from "react";
import "react-native-gesture-handler";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Ionicons} from "react-native-vector-icons/Ionicons";

import {MainScreen, RadioScreen, TvScreen, JournalScreen, TestScreen} from "./screens";

const MainStack = createStackNavigator({
  Main: MainScreen,
});

const RadioStack = createStackNavigator({
  Radio: RadioScreen,
});

const TVStack = createStackNavigator({
  TV: TvScreen,
});

const NationalStack = createStackNavigator({
  National: JournalScreen,
});

const TestStack = createStackNavigator({
  Test: TestScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Accueil: {screen: MainStack},
    "Radio ": {screen: RadioStack},
    Television: {screen: TVStack},
    "Le Journal": {screen: NationalStack},
    Information: {screen: TestStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      TabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === "Accueil") {
          iconName = `ios-home${focused ? "" : ""}`;
        } else if (routeName === "Television") {
          iconName = `md-tv${focused ? "" : ""}`;
        } else if (routeName === "Radio") {
          iconName = `md-radio${focused ? "" : ""}`;
        } else if (routeName === "Le Journal") {
          iconName = `ios-journal${focused ? "" : ""}`;
        } else if (routeName === "Information") {
          iconName = `ios-checkmark-circle${focused ? "" : ""}`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: "#fca010",
      inactiveTintColor: "#1e2b56",
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  App: {
    screen: TabNavigator,
  },
});

export default createAppContainer(DrawerNavigator);
