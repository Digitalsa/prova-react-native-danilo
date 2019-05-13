import React, { Component } from "react";

import { View, StyleSheet } from "react-native";

import AppNavigator from "./App";
import { createAppContainer } from "react-navigation";
const AppContainer = createAppContainer(AppNavigator);

export default class Main extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#362986"
  }
});
