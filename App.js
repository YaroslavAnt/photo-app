import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  Alert
} from "react-native";
import MyListItem from "./components/MyListItem";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyListItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#bbb",
    flex: 1,
    paddingTop: 22
  }
});
