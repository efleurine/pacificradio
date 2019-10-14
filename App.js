/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import TestNavigator from "./tempo";

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{flex: 1}}>
          <TestNavigator />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
