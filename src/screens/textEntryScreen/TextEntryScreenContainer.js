import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TextInput,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get('window')

import BasicScreenView from "../basicScreen/BasicScreenView";


// Some things to add to API

// TEXT REQUIRED = disables button when no text
// Show skip button etc


export default (TextEntryScreen = props => {
  let { stateKey } = props;

  class TextEntryScreenContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        input: ""
      };
    }

    _renderForm = () => {
      return (
        <TextInput
          style={styles.inputTextStyle}
          value={this.state.input}
          onChangeText={this.onChange}
          clearButtonMode={"while-editing"}
          keyboardType={"ascii-capable"}
          returnKeyType={"next"}
          {...props}
        />
      );
    };

    onChange = data => {
      this.setState({ input: data });
    };

    _onPress = values => {
      Keyboard.dismiss();
      this.props.screenProps.saveSetting(stateKey, this.state.input, () =>
        this.props.screenProps.next()
      );
    };

    render() {
      return (
        <BasicScreenView
          {...props}
          {...this.props}
          onPress={this._onPress}
          middle={this._renderForm()}
        />
      );
    }
  }

  return TextEntryScreenContainer;
});

const styles = StyleSheet.create({
  inputTextStyle: {
    fontSize: 34,
    fontWeight: "500",
    textAlign: "center",
    width: width-100,
    borderBottomWidth: 0.6,
    borderBottomColor: "black"
  }
});
