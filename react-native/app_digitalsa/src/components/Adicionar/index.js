import React, { Component } from "react";
import Axios from "axios";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import baseUrl from "./../../config/baseUrl";

// import { Container } from './styles';
const url = baseUrl.baseUrl;

export default class Adicionar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    nome: "",
    email: "",
    password: "",
    celular: ""
  };
  componentDidMount() {
    if (this.props.navigation.state.params) {
      this.setState({
        nome: this.props.navigation.state.params.item.nome || "",
        email: this.props.navigation.state.params.item.email || "",
        password: "",
        id: this.props.navigation.state.params.item.id || ""
      });
    }
  }
  onSubmitHandlerValidateFields = () => {
    if (
      this.state.nome === "" ||
      this.state.nome === null ||
      this.state.email === "" ||
      this.state.email === null ||
      this.state.password === "" ||
      this.state.password === null
    ) {
      ToastAndroid.show(
        "Preencha os campos adequadamente!",
        ToastAndroid.showWithGravity
      );
    } else {
      this.onSubmitHandler();
    }
  };
  onSubmitHandler = () => {
    //http://34.192.62.185:3256/api/usuarios/novo
    const data = this.state;
    console.log(this.props);
    console.log(this.props.navigation.state.params.item.id);
    if (this.props.navigation.state.params.item.id > 0) {
      Axios.put(
        `${url}usuarios/update/${this.props.navigation.state.params.item.id}`,
        { ...this.state }
      )
        .then(resp => {
          console.log("Respota de atualizacao", resp);
          ToastAndroid.show(
            "Registro atualizado com sucesso!",
            ToastAndroid.SHORT
          );
          this.props.navigation.navigate("Listar");
        })
        .catch(err => console.log("Erro de atualziacao", err));
    } else {
      Axios.post(`${url}usuarios/novo`, this.state)
        .then(resp => {
          console.log(resp);
          ToastAndroid.show(
            "Registro adicionado com sucesso!",
            ToastAndroid.SHORT
          );
          this.props.navigation.navigate("Listar");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <View style={styles.content}>
        <TextInput
          value={this.state.nome}
          style={styles.tx}
          placeholder="Nome"
          onChangeText={nome => this.setState({ nome })}
        />
        <TextInput
          value={this.state.email}
          style={styles.tx}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          value={this.state.celular}
          style={styles.tx}
          placeholder="9999-9999"
          onChangeText={celular => this.setState({ celular })}
        />
        <TextInput
          value={this.state.password}
          style={styles.tx}
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.onSubmitHandlerValidateFields()}
        >
          <Text style={{ fontSize: 24, alignSelf: "center", color: "#FFF" }}>
            Salvar Dados
          </Text>
        </TouchableOpacity>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          icon={<Icon name="ios-search" size={25} color="#fff" />}
        >
          <ActionButton.Item
            buttonColor="#34A34F"
            title="Listar Usuários"
            onPress={() => this.props.navigation.navigate("Listar")}
          >
            <Icon name="ios-list" size={25} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: "#362986",
    flex: 1,
    padding: 10
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
  }
});
