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
import { connect } from "react-redux";
import { changeImage } from "../redux/redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  item: {
    margin: 5
  },
  baseText: {
    fontSize: 16
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

class MyListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    };
  }

  onPressHandler = src => {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    //this.props.setNewImage(src);
    navigate("Photo");
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableHighlight
          onPress={() => this.onPressHandler(item.urls.small)}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              style={{ width: 100, height: 100, marginRight: 15 }}
              source={{
                uri: item.urls.small
              }}
            />
            <View style={{ justifyContent: "center", flex: 1 }}>
              <Text style={styles.titleText}>{item.user.name}</Text>
              <Text style={styles.baseText}>{item.user.location}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  componentDidMount() {
    const url =
      "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson");
        this.setState({
          dataSource: responseJson
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setNewImage: newSrc => {
      dispatch(changeImage(newSrc));
    }
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MyListItem);

export default MyListItem;
