import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { width, height } = Dimensions.get("window");

const HeaderText = ({ text, style }) => {
  return (
    <Text style={[styles.textStyle, style]}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    fontFamily: 'AvenirNext-Regular',
  }
});

export default HeaderText;
