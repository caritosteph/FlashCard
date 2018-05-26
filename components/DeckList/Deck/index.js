import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './deck.styles'

const Deck = ({ deckInfo, navigateDeckItem }) => (
  <View key={deckInfo.title}>
    <TouchableOpacity
      onPress={()=> navigateDeckItem(deckInfo.title)}>
      <View style={styles.deckBox}>
        <Text style={styles.title}>{deckInfo.title}</Text>
        <Text>{deckInfo.questions.length} {deckInfo.questions.length == 1 ? 'card' : 'cards'}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default Deck
