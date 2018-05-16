import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import AddDecks from '../components/AddDecks'
import DeckList from '../components/DeckList'
import { Ionicons } from '@expo/vector-icons'
import { white, purple, red } from '../utils/color'

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-browsers-outline' size={30} color={tintColor} />
      )
    }
  },
  AddDecks: {
    screen: AddDecks,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-create-outline' size={30} color={tintColor} />
      )
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: purple,
    },
  },
})

const MainNavigation = createStackNavigator({
  Home: {
    screen: Tabs
  },
}, {
  navigationOptions: {
    title: 'FlashCards'
  },
})

export default MainNavigation
