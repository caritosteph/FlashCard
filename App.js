import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { purple } from './utils/color'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/notifications'
import MainNavigation from './config/routes'
import store from './config/store'

const FlashCardStatusBar = ({ backgroundColor, ...props}) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar
       translucent
       backgroundColor={backgroundColor}
       {...props} />
  </View>
)

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}
