import React from "react";
import "react-native-gesture-handler";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {AccueilScreen, RadioScreen, TvScreen, JournalScreen, TestScreen} from "./screens";

const AccueilStack = createStackNavigator({
  Main: AccueilScreen,
});

const RadioStack = createStackNavigator({
  Radio: RadioScreen,
});

const TVStack = createStackNavigator({
  TV: TvScreen,
});

const JournalStack = createStackNavigator(
  {
    National: JournalScreen,
  },
  {
    headerMode: "none",
  }
);

const TestStack = createStackNavigator({
  Test: TestScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Accueil: {screen: AccueilStack},
    Radio: {screen: RadioStack},
    Television: {screen: TVStack},
    Journal: {screen: JournalStack},
    Test: {screen: TestStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        const IconComponent = MaterialIcons;
        let iconName = "";

        if (routeName === "Accueil") {
          iconName = `home`;
        } else if (routeName === "Television") {
          iconName = "tv";
        } else if (routeName === "Radio") {
          iconName = "radio";
        } else if (routeName === "Journal") {
          iconName = "library-books";
        } else if (routeName === "Test") {
          iconName = "info";
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      // activeTintColor: "#000000",
      // inactiveTintColor: "#000000",
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
