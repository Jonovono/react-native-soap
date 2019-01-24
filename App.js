/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'; 

// let bg = require('./src/assets/images/lobbyBg.jpg')
// let logo = require('./src/assets/images/gameroom.png')
// let screenshot = require('./src/assets/images/screenshot.png')
// let lines = require('./src/assets/images/lines.png')

import Onboarder from './react-native-soap/index'

import {BasicScreen} from './react-native-soap/screens'
// import {SimpleButtonScreen, TextEntryScreen, PhoneNumberAuthFlow, PermissionScreen} from './src/modules'

let backgroundColor = 'white'


class View1 extends React.Component {
  press = () => {
    console.log("HUZ", this.props)
    this.props.screenProps.next()
  }
  render() {
    return (
      <TouchableOpacity onPress={this.press} style={{backgroundColor: 'blue', flex: 1}} />
    )
  }
}

class View2 extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.screenProps.back} style={{backgroundColor: 'green', flex: 1}} />
    )
  }
}

const bs = BasicScreen({
  footer: 'BOOYA',
  header: "BUNCH"
})

// let PhoneAuth = PhoneNumberAuthFlow()

// let BasicView2 = SimpleButtonScreen({
//   backgroundStyle: {
//     backgroundColor
//   },
//   buttonText: 'TEST',
//   footer: 'Please continue',
//   middle: <Image source={screenshot} style={{resizeMode: 'contain', flex: 1}} />
// })

// let BasicView3 = SimpleButtonScreen({
//   backgroundStyle: {
//     backgroundColor
//   },
//   buttonText: 'OK?'
// })

// let TextView = TextEntryScreen({
//   backgroundStyle: {
//     backgroundColor
//   },
//   stateKey: 'username',
//   placeholder: 'test'
// })

// let PhoneView = PhoneNumberAuthFlow({
//   backgroundStyle: {
//     backgroundColor
//   },
//   buttonText: 'Send SMS',
//   stateKey: 'phone',
// })

// let Permission = PermissionScreen({
//   header: 'One last thing...',
//   stateKey: 'permissions',
//   permissions: [
//     {
//       permission: 'microphone',
//       title: 'Allow Microphone',
//       subtitle: 'So your friends can hear your beautiful voice',
//       required: true
//     },
//     {
//       permission: 'camera',
//       title: 'Allow Camera',
//       subtitle: 'So your friends see your pretty face',
//       required: true
//     },
//     {
//       permission: 'notifications',
//       title: 'Allow Notifications',
//       subtitle: 'So you know when your friends have arrived',
//       required: false
//     }
//   ]
// })

const OnboarderView = Onboarder({
  Initial: {
    screen: View1
  },
  Copy: {
    screen: View2
  },
  Basic: {
    screen: bs
  }
  // One: {
  //   screen: TextView
  // },
  // Two: {
  //   screen: BasicView3
  // },
  // Phone : {
  //   screen: PhoneView
  // },
  // Auth: {
  //   screen: PhoneAuth
  // },
  // Per: {
  //   screen: Permission
  // }
}, {
  order: ['Basic', 'Copy'],
  // order: ['Per', 'One', 'Initial', 'Auth'],
  animation: 'push' // "slide", "push"
})


export default class App extends Component {
  onEnd = (data) => {
    console.log("DATA", data)
  }

  onTransition = (from, to, data) => {
    console.log("INFO", from, to, data)
  }

  render() {
    console.disableYellowBox = true
    return (
      <OnboarderView onEnd={this.onEnd} onTransition={this.onTransition} />
    );
  }
}

