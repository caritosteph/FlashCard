import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import AddDecks from '../AddDecks'
import DeckList from '../DeckList'
import { Ionicons } from '@expo/vector-icons'
import { white, purple, red } from '../../utils/color'

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
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 5,
      shadowOpacity: 1,
    },
  }
})

const MainNavigation = createStackNavigator({
  Home: {
    screen: Tabs
  }
})

export default MainNavigation
