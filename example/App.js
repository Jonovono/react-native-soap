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

let backgroundColor = 'white'

class View1 extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.screenProps.next} style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Text>can we go back to that green screen?</Text>

        <TouchableOpacity style={{backgroundColor: 'white', width: 200, height: 200, borderRadius: 50 , justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} onPress={this.props.screenProps.back}>
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
  middle: 'https://i.imgur.com/2D4pDjZ.png',
  footer: 'Make simple screens like this'
})

const FullScreen = BasicScreen({
  backgroundImage: background,
  buttonText: 'Or full screen image'
})

const JustFace = BasicScreen({
  middle: face,
  buttonText: 'Or this',
  backgroundStyle: {
    backgroundColor: 'yellow'
  }
})

const te = TextEntryScreen({
  header: 'Or ask for some info',
  footer: 'Which is saved for you later',
  stateKey: 'info'
})

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
}, {
  order: ['Initial', 'Fullscreen', 'JustFace',  'Text', 'Custom', 'Custom2'],
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
        <Text>You finished onboarding. You entered this text:</Text>
        <Text style={{fontSize: 70}}>{this.state.data.info}</Text>
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

