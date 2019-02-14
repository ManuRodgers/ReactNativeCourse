/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      places: []
    };
  }

  render() {
    let { placeName, places } = this.state;
    console.log(placeName);
    console.log(places);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder={`An awesome place`}
            value={placeName}
            onChangeText={value => {
              this.setState({ placeName: value });
            }}
          />
          <Button
            style={styles.placeAddButton}
            onPress={() => {
              // placeName cannot be empty
              if (placeName.trim() === "") {
                return;
              }
              return this.setState({
                places: [...places].includes(placeName)
                  ? [...places]
                  : [...places, placeName],
                placeName: ""
              });
            }}
            title={`ADD`}
          />
        </View>
        <View>
          {places.length > 0 &&
            places.map((place, index) => <Text key={index}>{place}</Text>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  placeInput: {
    width: "70%"
  },
  placeAddButton: {
    width: "30%"
  }
});
