import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// import { Container } from './styles';

const Detail = props => {
  deleteItem = item => {
    props.deleteItem(item);
  };
  console.log(props);
  return (
    <View style={styles.content}>
      <View style={styles.bio}>
        <Text style={styles.title}>{props.nome}</Text>
        <Text style={styles.subTitle}>Email: {props.email}</Text>

        <Text style={styles.subTitle}>Criado em: {props.created_at}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => deleteItem(props.id)}>
          <Icon name="delete" size={34} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => false}>
          <Icon name="edit" size={34} color="#94D211" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 1
  },
  bio: {
    flexDirection: "column",
    flexWrap: "wrap",

    flex: 1
  },
  options: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },

  title: {
    fontSize: 18,
    color: "#000000"
  },
  subTitle: {
    color: "rgba(0, 0, 0, 0.47);",
    fontSize: 14
  }
});
