import React, { Component } from "react";
import { Image, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

class myPhoto extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <View
        style={{ flex: 1, flexDirection: "column", backgroundColor: "green" }}
      >
        <TouchableHighlight onPress={() => navigate("Home")}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: this.props.newSrc
            }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { newSrc: state.src };
};

export default connect(mapStateToProps)(myPhoto);
