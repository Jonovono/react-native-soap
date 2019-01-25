import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Text, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native';

// import {StackNavigator, TabNavigator} from 'react-navigation'
// import {NavigationActions, addNavigationHelpers} from 'react-navigation'

import { createStackNavigator, createAppContainer, createBottomTabNavigator, NavigationActions } from "react-navigation";


export {BasicScreen, TextEntryScreen} from './src/screens'

export default (screensConfigMap, onboardingConfig) => {
    const screenNames = Object.keys(screensConfigMap)

    let {order, animation} = onboardingConfig

    let createNavigatorType = animation === 'push' ? createStackNavigator : createBottomTabNavigator

    let tabs = {}

    screenNames.forEach((screenName) => {
        let props = screensConfigMap[screenName]
        tabs[screenName] = {screen: props.screen}
    })

    const AppNavigator = createAppContainer(createNavigatorType(tabs, {
        animationEnabled: true,
        defaultNavigationOptions: {
            tabBarVisible: false
        },
        headerMode: 'none',
        order: order,
        lazy: false,
        initialRouteName: order ? order[0] : screenNames[0]
        // transitionConfig: TransitionConfiguration
    }))

    class GeneratedComponent extends Component {
        constructor() {
            super()

            this.navigatorRef = null

            this.state = {
                currentPage: 0,
                order: order ? order : screenNames,

                onboardingSettings: {}
            }
        }
        
        next = () => {
          console.log("hit this")
            let {currentPage, order} = this.state
            let prevPageName = order[currentPage]

            let nextPage = currentPage + 1

            if (nextPage >= order.length) {
                this.props.onEnd && this.props.onEnd(this.state.onboardingSettings)
                return
            }

            this.setState({currentPage: nextPage})

            let pageName = order[nextPage]

            this.props.onTransition && 
                this.props.onTransition(prevPageName, pageName, this.state.onboardingSettings)

            this.navigatorRef.dispatch(
                NavigationActions.navigate({type: 'Navigation/NAVIGATE', routeName: pageName})
            )
        }

        back = () => {
            let {currentPage, order} = this.state
            let prevPageName = order[currentPage]

            if (currentPage <= 0) return

            let nextPage = currentPage - 1
            let pageName = order[nextPage]

            this.setState({currentPage: nextPage})

            this.props.onTransition &&
                this.props.onTransition(prevPageName, pageName, this.state.onboardingSettings)

            this.navigatorRef.dispatch(
                NavigationActions.back()
            )
        }

        componentDidMount() {
            this.navigatorRef = this.navigator
        }

        saveSetting = (key, value, cb) => {
            this.setState({
                onboardingSettings: {
                    ...this.state.onboardingSettings,
                    [key]: value
                }
            }, cb)
        }

        render() {
            let propsForScreen = {
                next: this.next,
                back: this.back,
                saveSetting: this.saveSetting
            }

            return (
                <AppNavigator screenProps={propsForScreen} ref={nav => { this.navigator = nav }} />
            )
        }
    }

    return GeneratedComponent
}

// export const onboardingCreator = (props) => <View style={{backgroundColor: 'blue', flex: 1}} />