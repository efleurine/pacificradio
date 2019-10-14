import React from "react";
import {View, Text, Button} from "react-native";

export default function DemoScreen(props) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Demo Screen</Text>
      <Button title="Go to Test" onPress={() => props.navigation.navigate("Test")} />
    </View>
  );
}

DemoScreen.navigationOptions = {
  title: "DemoScreen",
};
