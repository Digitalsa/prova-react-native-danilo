import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ToastAndroid,
  RefreshControl,
  Animated,
  ActivityIndicator
} from "react-native";

import baseUrl from "./../../config/baseUrl";
import Axios from "axios";
import Detail from "./Detail";
import { ScrollView } from "react-native-gesture-handler";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

// import { Container } from './styles';

const users = [];
const url = baseUrl.baseUrl;
export default class List extends Component {
  state = {
    users,
    refreshing: false,
    loading: false,
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0

    textSize: new Animated.Value(10)
  };

  componentDidMount() {
    console.log("Carregando Registros");
    this.carregarRegistros();
    Animated.parallel([
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          duration: 3000 // Make it take a while
        }
      ),
      Animated.timing(this.state.textSize, {
        toValue: 20,
        duration: 10000
      })
    ]).start();
  }

  carregarRegistros = () => {
    users.length = 0;
    this.setState({
      refreshing: true,
      loading: true
    });
    users.length = 0;
    Axios.get(`${url}usuarios`)
      .then(resp => {
        resp.data.forEach(row => {
          users.push(row);
        });
        this.setState({
          users,
          refreshing: false,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteItem = id => {
    //http://34.192.62.185:3256/api/usuarios/delete/[id]
    Axios.delete(`${url}usuarios/delete/${id}`)
      .then(resp => {
        ToastAndroid.show("Registro excluído com sucesso!", ToastAndroid.SHORT);
      })
      .catch(err => console.log(err));
    this.carregarRegistros();
  };
  editItem = item => {
    this.props.navigation.navigate("Adicionar", { item });
  };

  render() {
    console.log(this.state.fadeAnim);

    return (
      <View style={{ flex: 1, backgroundColor: "#362986" }}>
        <View style={{ height: 50, backgroundColor: "#362986" }}>
          <Text style={styles.title}>Lista de Usuários</Text>
        </View>
        <View style={{}}>
          <ActivityIndicator animating={this.state.loading} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                style={{ margin: 0 }}
                refreshing={this.state.refreshing}
                onRefresh={this.carregarRegistros}
              />
            }
            style={{
              backgroundColor: "#362986",
              paddingLeft: 4,
              paddingRight: 4,
              marginBottom: 70
            }}
          >
            {this.state.users.map((row, index) => (
              <Detail
                fade={this.state.fadeAnim}
                animationFont={this.state.textSize}
                key={index}
                {...row}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
              />
            ))}
          </ScrollView>
        </View>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Adicionar Usuário"
            onPress={() => this.props.navigation.navigate("Adicionar")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#362986"
  },
  title: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFF",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
