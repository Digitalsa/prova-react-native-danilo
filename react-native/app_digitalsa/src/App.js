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
import Adicionar from "./components/Adicionar";
import Login from "./components/Login";
const AdicionarScreen = () => <Text>Adicionarrr</Text>;
const AppNavigator = createStackNavigator(
  {
    Adicionar: {
      screen: Adicionar
    },
    Listar: {
      screen: List
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Login",
    headerBackTitleVisible: false,
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
