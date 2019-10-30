import React from "react";
import {View, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import {Header, Text, Icon} from "react-native-elements";
import IconTest from "react-native-vector-icons/MaterialIcons";

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: "Acceuil",
  });

  render() {
    return (
      <View>
        <Text>Cool</Text>
        {/* <ImageBackground
            source={require("../assets/images/orange.jpg")}
            style={styles.container}
          /> */}
      </View>
    );
  }
}

function TestTheIcon({name}) {
  return (
    <View>
      <IconTest
        // color="white"
        underlayColor="transparent"
        name={name}
        onPress={() => {
          console.log("phone action");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 1000,
    height: 1000,
  },
  menuIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    backgroundColor: "transparent",
  },
  icon: {},
});
