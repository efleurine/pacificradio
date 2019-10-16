import React from "react";
import {View, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import {Header, Text, Icon} from "react-native-elements";
// import Icon from "react-native-vector-icons/MaterialIcons";

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header
        placement="left"
        leftComponent={
          <Icon
            color="white"
            underlayColor="transparent"
            name="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        }
        // centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={
          <View style={styles.menuIcons}>
            <Icon
              color="white"
              underlayColor="transparent"
              name="live-tv"
              onPress={() => navigation.navigate("Television")}
            />
            <Icon
              color="white"
              underlayColor="transparent"
              name="radio"
              onPress={() => navigation.navigate("RadioP")}
            />
            <Icon
              color="white"
              underlayColor="transparent"
              name="share"
              onPress={() => {
                console.log("open share");
              }}
            />
            <Icon
              color="white"
              underlayColor="transparent"
              name="phone"
              onPress={() => {
                console.log("phone action");
              }}
            />
            <Icon
              color="white"
              underlayColor="transparent"
              name="more-vert"
              onPress={() => {
                console.log("open menu");
              }}
            />
          </View>
        }
      />
    ),
  });

  render() {
    return (
      <SafeAreaView>
        <Text>Cool</Text>
        <View>
          <ImageBackground source={require("../assets/images/back.png")} style={styles.container} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 450,
    height: 200,
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
