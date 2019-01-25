import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { HeaderText, HeaderImage } from '.'
import isUrl from 'is-url'

const FlexHeightView = ({ children, containerStyle, style }) => {
  renderChildren = () => {
    if (typeof children === 'object') {
      return children
    }
    else if (typeof children === 'number' || (typeof children === 'string' && isUrl(children))) {
      console.log("HUZZA", children)
      return <HeaderImage image={children} style={style} />
    }
    else {
      return <HeaderText text={children} style={style} />
    }
  }
  return (
    <View style={styles.middleStyle}>
      {renderChildren()}
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
