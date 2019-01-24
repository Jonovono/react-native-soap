import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, View, ViewPropTypes, Text } from 'react-native';
import { HeaderText, HeaderImage } from '.'
import isUrl from 'is-url'

const FixedHeightView = ({children, containerStyle, style}) => {
  renderHeader = () => {
    if (typeof children === 'object') {
      return children
    }
    else if (typeof children === 'number' || (typeof children === 'string' && isUrl(children))) {
      return <HeaderImage image={data} style={style} />
    }
    else {
      return <HeaderText text={children} style={style} />
    }
  }
  return (
    <View style={[styles.headerStyle, containerStyle]}>
      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    height: '10%',
  }
});

// FixedHeightView.propTypes = {
//   style: ViewPropTypes.style,
//   containerStyle: ViewPropTypes.style,
//   data: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])
// }

// FixedHeightView.defaultProps = {
//   data: 'Welcome to this APP!'
// }

export default FixedHeightView;
