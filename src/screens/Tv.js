import React from "react";
import {StyleSheet, Text} from "react-native";
import {WebView} from "react-native-webview";

export default class TvScreen extends React.Component {
  render() {
    return <WebView source={{uri: "https://hbiptv.live/pacific54/index.m3u8"}} />;
  }
}