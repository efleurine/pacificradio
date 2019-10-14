import "react-native-gesture-handler";
import {useScreens} from "react-native-screens";
import React from "react";
import {View, Text, Button} from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

useScreens();

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen</Text>
        <Button title="Go to HomeScreen" onPress={() => this.props.navigation.navigate("Demo")} />
      </View>
    );
  }
}

function HomeDemoScreen(props) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button title="Go to HomeScreen2" onPress={() => props.navigation.navigate("Test")} />
    </View>
  );
}

function HomeDemoScreen2(props) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button title="Go to Home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Demo: {
    screen: HomeDemoScreen,
  },
  Test: {
    screen: HomeDemoScreen2,
  },
});

export default createAppContainer(AppNavigator);
