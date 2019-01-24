import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const FlexHeightView = ({ children }) => {
  return (
    <View style={styles.middleStyle}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  middleStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  }
});

export default FlexHeightView;
