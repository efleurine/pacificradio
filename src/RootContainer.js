import React from "react";
import "react-native-gesture-handler";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";

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

const TabNavigator = createBottomTabNavigator({
  Main: MainStack,
  Radio: RadioStack,
  TV: TVStack,
  National: NationalStack,
  Test: TestStack,
});

const DrawerNavigator = createDrawerNavigator({
  App: {
    screen: TabNavigator,
  },
});

export default createAppContainer(DrawerNavigator);
