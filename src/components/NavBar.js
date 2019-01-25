import React, { Component } from 'react';
import { Dimensions, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity } from 'react-native';

import ButtonView from './ButtonView';

const { width, height } = Dimensions.get("window");

const NavBar = ({
    left,
    right,
    onLeftPressed,
    onRightPressed,

    leftStyle,
    rightStyle
}) => {

    _renderNavItem = (item, side) => {
        console.log("ITEMS" ,item)
        let sideStyle
        if (side === 'left') {
            sideStyle = StyleSheet.flatten([styles.left, leftStyle])
        } else {
            sideStyle = StyleSheet.flatten([styles.right, rightStyle])
        }

        if (!item) return null
        return <View style={sideStyle} />

        if (typeof item === 'object') {
            return item
        }
        else if (typeof data === 'number' || (typeof data === 'string' && isUrl(data))) {
            return <HeaderImage header={data} style={style} />
        }
        else {
            return <HeaderText header={data} style={style} />
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flex: 1}} onPress={onLeftPressed} activeOpacity={0.7}>
                {_renderNavItem(left, 'left')}
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1}} onPress={onRightPressed} activeOpacity={0.7}>
                {_renderNavItem(right, 'right')}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 20,
        width,
        marginTop: 40
    },
    left: {
        width: 20,
        height: 20,
        backgroundColor: 'green',
        position: 'absolute',
        left: 20,
    },
    right: {
        width: 20,
        height: 20,
        backgroundColor: 'green',
        position: 'absolute',
        right: 20,
    }
});

export default NavBar;
