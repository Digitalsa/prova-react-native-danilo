import React, { Component } from "react";
import Axios from "axios";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import baseUrl from "./../../config/baseUrl";
const url = baseUrl.baseUrl;

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  doLogin = () => {
    Axios.post(`${url}login`, { ...this.state })
      .then(resp => {
        if (!resp.data.status) {
          ToastAndroid.show(resp.data.message, ToastAndroid.SHORT);
        } else {
          this.props.navigation.navigate("Listar");
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Efetuar Login</Text>
        <TextInput
          value={this.state.email}
          style={styles.tx}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          value={this.state.password}
          secureTextEntry={true}
          style={styles.tx}
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.doLogin()}>
          <Text style={{ fontSize: 24, alignSelf: "center", color: "#FFF" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: "#362986",
    flex: 1,
    padding: 10,
    justifyContent: "center"
  },
  tx: {
    backgroundColor: "#94D211",
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.37)"
  },
  btn: {
    backgroundColor: "#8377C8",
    height: 40,
    borderRadius: 10,
    marginTop: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },
  title: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFF",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10
  }
});
