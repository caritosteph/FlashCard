import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './deck.styles'

const Deck = ({ deckInfo, navigateDeckItem }) => (
  <TouchableOpacity
    onPress={()=> navigateDeckItem()}>
    <View style={styles.deckBox}>
      <Text>React</Text>
      <Text>3 cards</Text>
    </View>
  </TouchableOpacity>
)

export default Deck;
