import React from "react";
import {View, Text, Button} from "react-native";

export default function RadioScreen(props) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>This is the radio</Text>
    </View>
  );
}

RadioScreen.navigationOptions = {
  title: "Radio",
};
