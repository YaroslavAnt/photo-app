import React from "react";
import { StyleSheet, Text } from "react-native";

const listItem = props => <Text style={styles.item}>{props.text}</Text>;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default listItem;
