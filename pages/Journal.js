import React from "react";
import {StyleSheet, Text, WebView} from "react-native";

export default class Television extends React.Component {
  render() {
    return <WebView source={{uri: "http://www.lenational.org/reader.php"}} />;
  }
}
