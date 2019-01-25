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

const background = require("./assets/background.jpg")
const face = require('./assets/face.png')

import Onboarder, {TextEntryScreen, BasicScreen} from 'react-native-soap'

// import {BasicScreen, TextEntryScreen} from './react-native-soap/screens'
// import {SimpleButtonScreen, TextEntryScreen, PhoneNumberAuthFlow, PermissionScreen} from './src/modules'

let backgroundColor = 'white'


class View1 extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.screenProps.next} style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text>can we go back to that green screen?</Text>

        <TouchableOpacity style={{backgroundColor: 'white', width: 400, height: 200   }} onPress={this.props.screenProps.back}>
          <Text>BACK</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

class View2 extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.screenProps.next} style={{backgroundColor: 'green', flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text>YO THIS IS A CUSTOM SCREEN LOLOLOLOL</Text>
      </TouchableOpacity>
    )
  }
}

const IntroScreen = BasicScreen({
  header: 'Welcome to SOAP!',
  middle: 'https://i.imgur.com/2pgeXOF.jpg',
  footer: 'Make simple screens like this'
})

const FullScreen = BasicScreen({
  backgroundImage: background,
  buttonText: 'Or full screen image'
})

const JustFace = BasicScreen({
  middle: face,
  buttonText: 'Or this',
})

const te = TextEntryScreen({
  header: 'Or ask for some info',
  footer: 'Which is saved for you later',
  stateKey: 'info'
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
    screen: IntroScreen
  },
  Custom: {
    screen: View2
  },
  Text: {
    screen: te
  },
  Fullscreen: {
    screen: FullScreen
  },
  JustFace: {
    screen: JustFace
  },
  Custom2: {
    screen: View1
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
  order: ['Initial', 'Fullscreen', 'JustFace',  'Text', 'Custom', 'Custom2'],
  // order: ['Per', 'One', 'Initial', 'Auth'],
  animation: 'push' // "slide", "push"
})


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onboarder: false,
      data: null
    }
  }
  onEnd = (data) => {

    this.setState({
      onboarded: true,
      data
    })
  }

  renderAuthView() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Text>You entered this text</Text>
        <Text>{this.state.data.info}</Text>
      </View>
    )
  }

  onTransition = (from, to, data) => {
    console.log("INFO", from, to, data)
  }

  render() {
    console.disableYellowBox = true

    if (this.state.onboarded) return this.renderAuthView()
    return (
      <OnboarderView onEnd={this.onEnd} onTransition={this.onTransition} />
    );
  }
}

