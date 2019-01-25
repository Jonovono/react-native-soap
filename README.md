# React Native SOAP (BETA)
Sexy Onboarder with Authentication and Permissions (and more)

<p align="center">
  <img src="https://i.imgur.com/pol7ZwS.jpg" alt="drawing" width="600"/>
</p>

## Goal
The goal of this library is to provide a set of easy to use components typically found in user onboarding flows that you can customize and use make your onboarding flow look super sexy 

When I was building [Bunch](https://itunes.apple.com/us/app/bunch-group-video-chat-games/id1294869021?mt=8) I was looking for something like this since lots of other apps do onboarding the way we wanted but nothing seemed to exist. So I built one and want to make it open for others if they find it useful!

Build stuff like this easily: 

<p align="center">
 <img src="https://i.imgur.com/2X4wh7f.gif" alt="drawing" width="300"/>
</p>


## Getting Started

### Install

`yarn add react-native-soap`


`import Onboarder, {TextEntryScreen, BasicScreen} from 'react-native-soap'`

**NOTE. This repo relies on `react-navigation` at the moment, so you will need to link `react-native-gesture-handler`. I have thoughts of making it not use this library but it makes things easier for now.** 

`yarn add react-native-gesture-handler`

`react-native link react-native-gesture-handler`

## Usage

For more detail view the `example` folder

If you are familular with `react-navigation` it operates very similar.

Create a Screen like:

```
const IntroScreen = BasicScreen({
  header: 'Welcome to SOAP!',
  middle: 'https://i.imgur.com/2D4pDjZ.png',
  footer: 'Make simple screens like this'
})
```

Once you have your screens, hook them up to the Onboarder like so:

```
const OnboarderView = Onboarder({
  Initial: {
    screen: IntroScreen
  }
}, {
  order: ['Initial'],
  animation: 'push'
})
```

And finally, render that OnboarderView in a component somewhere

```
export default class App extends Component {
  onEnd = (data) => {
   // this will contain any data saved
	console.log(data)
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
```

## API

### Onboarder

* onEnd: Called when the user finished onboarding
	* data: the data the user entered keyed by `stateKeys`	
* onTransition: called when user transitions from one screen to the next
	* from: the screen they were on
	* to: screen transitioning to
	* data: the data the user entered keyed by `stateKeys`

Also when setting up the Onboarder you can specify a few props

* order: the order the screens should appear
* animation: the type of animation to show when transitioning	

### BasicScreen

* backgroundStyle
* backgroundImage
* left
* right
* header
* headerContainerStyle
* headerStyle
* middle
* middleContainerStyle
* middleStyle
* footer
* footerContainerStyle
* footerStyle
* hideButton
* disableButton
* onPress
* buttonText
* screenProps
* navigation
* onLeftPressed
* onRightPressed

### TextEntryScreen

* ...BasicScreenProps
* ...ReactNative TextEntry props
* stateKey: This is where the input the user saves will be saved to


## Roadmap

There is lots left I want to do. I havn't brought over everything from our app into it yet. Here are some ideas, but feel free to open tickets with new ideas!

* Auth flow (with Firebase?)
* Permission flow
* Add friends flow
* Avatar caputure flow
* Theming system to easily add and create new themes
* Custom screen transitions
* Separate ordering for Android vs iOS
* Better handling of notches etc
* Better scaling for different devices

Here are some examples of stuff I want to let you build eventually:

<p align="center">
 <img src="https://i.imgur.com/YY53kjh.gif" alt="drawing" width="300"/>
  <img src="https://i.imgur.com/ZHCsQ5t.gif" alt="drawing" width="300"/>
     <img src="./examples/smsauthflow.gif" alt="drawing" width="300"/>

</p>


## Real world usage

We currently use something like this for our onboarding at Bunch. Here is a gif of our flow:

Check out our app here to try out the onboarding :) : https://itunes.apple.com/us/app/bunch-group-video-chat-games/id1294869021?mt=8

<img src="./examples/bunchexample.gif" alt="drawing" width="300"/>



