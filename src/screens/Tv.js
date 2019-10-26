import React from "react";
import {StyleSheet, Text} from "react-native";
import {WebView} from "react-native-webview";

export default function TvScreen() {
  return <WebView source={{uri: "https://hbiptv.live/pacific54/index.m3u8"}} />;
}

TvScreen.navigationOptions = {
  title: "Tele Pacific Chaine 54 - Live",
};
