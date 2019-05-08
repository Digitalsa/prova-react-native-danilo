import React from "react";

import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const Detail = props => {
  console.log(props);
  return (
    <View style={styles.content}>
      <Text>Nome:{props.nome}</Text>
      <Text>Email: {props.email}</Text>
      <Text>Password {props.password}</Text>
      <Text>Criado em: {props.created_at}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ececec",
    flexDirection: "column",
    justifyContent: "center",
    flex: 0.2,
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  }
});
