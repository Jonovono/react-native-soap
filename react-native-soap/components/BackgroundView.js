import React, { Component } from 'react';
import { Dimensions, KeyboardAvoidingView, StyleSheet, View, ImageBackground } from 'react-native';

import ButtonView from './ButtonView';

const { width, height } = Dimensions.get("window");

const BackgroundView = ({
  children,
  style,
  backgroundImage
}) => {
  return (
    <KeyboardAvoidingView style={[styles.container, style]} behavior={"padding"}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        {children}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    paddingTop: 15
  }
});

export default BackgroundView;
