import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BackgroundView, ButtonView, FixedHeightView, HeaderText, FlexHeightView, NavBar } from '../../components'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default BasicScreenView = ({
    backgroundStyle,
    backgroundImage,
    left,
    right,

    header,
    headerContainerStyle,
    headerStyle,

    middle,
    middleContainerStyle,
    middleStyle,

    footer,
    footerContainerStyle,
    footerStyle,

    hideButton,
    disableButton,
    onPress,
    buttonText,

    screenProps,
    navigation,
    onLeftPressed,
    onRightPressed,
}) => {

    _press = () => {
        if (disableButton) return

        if (onPress) return onPress()
        if (screenProps.next) return screenProps.next()
    }

    _lefPressed = () => {
        if (onLeftPressed) return onLeftPressed()
        screenProps.back()
    }

    _rightPressed = () => {
        if (onRightPressed) return onRightPressed()
        screenProps.next()
    }

    return (
        <BackgroundView style={backgroundStyle} backgroundImage={backgroundImage}>
            <NavBar 
                onLeftPressed={_lefPressed}
                onRightPressed={_rightPressed}
                left={left}
                right={right}/>
            <FixedHeightView containerStyle={headerContainerStyle} style={headerStyle}>
              {header}
            </FixedHeightView>

            <FlexHeightView containerStyle={middleContainerStyle} style={middleStyle}>
                {middle}
            </FlexHeightView>

            <FixedHeightView containerStyle={footerContainerStyle} style={footerStyle}>
              {footer}
            </FixedHeightView>

            {!hideButton && 
                <ButtonView
                    disableButton={disableButton}
                    onButtonPressed={_press}
                    text={buttonText} />
            }
        </BackgroundView>
    )
}