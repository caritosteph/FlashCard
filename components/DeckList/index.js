import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Deck from './Deck'
import { getDeckList } from '../../utils/api'
import styles from './deckList.styles'

class DeckList extends Component {

  render(){
    const deckList= getDeckList()
    return (
      <View  styles={styles.container}>
          <FlatList
            data={deckList}
            renderItem={() => <Deck />} />
      </View>
    )
  }

}

export default DeckList;
