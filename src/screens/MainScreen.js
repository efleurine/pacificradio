import React from "react";
import {View, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import {Header, Text, Icon} from "react-native-elements";
import IconTest from "react-native-vector-icons/MaterialIcons";

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
        <View>
          {/* <ImageBackground
            source={require("../assets/images/orange.jpg")}
            style={styles.container}
          /> */}
          <View>
            <Text>Hello world</Text>
          </View>
          <TestTheIcon name="phone" />
          <TestTheIcon name="radio" />
          <TestTheIcon name="home" />
        </View>
      </SafeAreaView>
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
