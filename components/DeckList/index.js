import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList } from 'react-native'
import Deck from './Deck'
import { fetchDeckList } from '../../utils/api'
import { fetchDecks } from '../../actions/decks'
import { DeckDetail } from '../DeckDetail'
import styles from './deckList.styles'

class DeckList extends Component {

  componentDidMount() {
    const { fetchDecks } = this.props
    fetchDecks()
  }

  renderDecks = ({ item }) => (
    <Deck deckInfo={item} navigateDeckItem={this.navigateDeckItem} />
  )

  navigateDeckItem = (item) => {
    const  { navigate } = this.props.navigation
    return navigate('DeckDetail', { item })
  }

  render(){
    const { decks } = this.props

    return (
      <View  styles={styles.container}>
          <FlatList
            data={decks}
            renderItem={this.renderDecks} />
      </View>
    )
  }
}

const mapStateToProps  = (state, ownProps) => ({
  decks: state.decks.decks,
})

const mapDispatchToProps = ({
  fetchDecks
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
