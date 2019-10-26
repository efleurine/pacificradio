import React from "react";
import {StyleSheet, Text} from "react-native";
import {WebView} from "react-native-webview";

export default function Journal() {
  return <WebView source={{uri: "http://www.lenational.org/reader.php"}} />;
}
