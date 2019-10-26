import React from "react";
import "react-native-gesture-handler";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {MaterialIcons} from "react-native-vector-icons/MaterialIcons";

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
    Radio: {screen: RadioStack},
    Television: {screen: TVStack},
    Journal: {screen: NationalStack},
    Information: {screen: TestStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      TabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        const IconComponent = MaterialIcons;
        let iconName;
        if (routeName === "Accueil") {
          iconName = `radio`;
        } else if (routeName === "Television") {
          iconName = `md-tv${focused ? "" : ""}`;
        } else if (routeName === "Radio") {
          iconName = `md-radio${focused ? "" : ""}`;
        } else if (routeName === "Le Journal") {
          iconName = `more-vert${focused ? "" : ""}`;
        } else if (routeName === "Information") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
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
