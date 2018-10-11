import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import * as redux from "./redux/redux";
import { createStackNavigator } from "react-navigation";

import MyListItem from "./components/MyListItem";
import MyPhoto from "./components/MyPhoto";

// const store = createStore(redux.rootReducer);

const Stack = createStackNavigator({
  Home: {
    screen: MyListItem
  },
  Photo: {
    screen: MyPhoto
  }
});

export default class App extends React.Component {
  render() {
    console.log("rootReducer");
    return (
      // <Provider store={store}>
      <View style={styles.container}>
        <Stack />
      </View>
      // </Provider>
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
