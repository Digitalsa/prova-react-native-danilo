/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import List from "./components/List";
const AdicionarScreen = () => <Text>Adicionarrr</Text>;

const AppNavigator = createStackNavigator(
  {
    Adicionar: {
      screen: AdicionarScreen
    },
    Listar: {
      screen: List
    }
  },
  {
    initialRouteName: "Listar",
    headerBackTitleVisible: false,
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
