import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

import baseUrl from "./../../config/baseUrl";
import Axios from "axios";
import Detail from "./Detail";
import { ScrollView } from "react-native-gesture-handler";

// import { Container } from './styles';

const users = [];
export default class List extends Component {
  state = {
    users
  };
  componentDidMount() {
    const url = baseUrl.baseUrl;
    Axios.get(`${url}usuarios`)
      .then(resp => {
        resp.data.forEach(row => {
          users.push(row);
        });
        this.setState({
          users
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.users);
    return (
      <ScrollView style={styles.content}>
        {this.state.users.map((row, index) => (
          <Detail key={index} {...row} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "orange",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10
  }
});
