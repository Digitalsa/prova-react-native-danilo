import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// import { Container } from './styles';

const Detail = props => {
  deleteItem = item => {
    props.deleteItem(item);
  };
  editItem = item => {
    props.editItem(item);
  };
  console.log(props);
  return (
    <Animated.View style={[styles.content]}>
      <View style={styles.bio}>
        <Animated.Text
          style={[
            styles.title,
            { fontSize: props.animationFont },
            { opacity: props.fade }
          ]}
        >
          {props.nome}
        </Animated.Text>

        <Text style={styles.subTitle}>Email: {props.email}</Text>
        <Text style={styles.subTitle}>Celular: {props.celular}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => deleteItem(props.id)}>
          <Icon name="delete" size={34} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editItem(props)}>
          <Icon name="edit" size={34} color="#94D211" />
        </TouchableOpacity>
      </View>
    </Animated.View>
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
