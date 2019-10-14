import React from "react";
import {View, Text, Button} from "react-native";

export default function TestScreen(props) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>This is the test Screen</Text>
      <Button title="Go to Home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
}

TestScreen.navigationOptions = {
  title: "TestScreen",
};
