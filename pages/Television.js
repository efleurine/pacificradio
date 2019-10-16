import React from "react";
import {StyleSheet, Text, WebView} from "react-native";

export default class Television extends React.Component {
  render() {
    return <WebView source={{uri: "https://hbiptv.live/pacific54/index.m3u8"}} />;
  }
}
