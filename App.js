import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootRerucer } from "./redux/redux";
import { createStackNavigator } from "react-navigation";
import thunk from "redux-thunk";

import MyListItem from "./components/MyListItem";
import MyPhoto from "./components/MyPhoto";

// const store = createStore(redux.rootReducer);

const middleware = store => {
  return next => {
    return action => {
      console.log("Middleware Dispatching", action);
      const result = next(action);
      console.log("Middleware next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootRerucer,
  composeEnhancers(applyMiddleware(middleware, thunk))
);

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
      <Provider store={store}>
      <View style={styles.container}>
        <Stack />
      </View>
      </Provider>
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
