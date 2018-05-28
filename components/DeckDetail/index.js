import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDeckDetail } from '../../utils/api'
import { deckDetail } from '../../actions/deck'
import styles from './deckDetail.styles'

class DeckDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item
  })

  componentDidMount() {
    const { navigation, deckDetail } = this.props

    getDeckDetail(navigation.state.params.item)
      .then(result => deckDetail(result))
  }

  addCardToDeck = item => {
    const { navigate } = this.props.navigation

    navigate('Cards', { item })
  }

  saveNewCard = () => {
    console.warn("Saving new card");
  }

  render() {
    const { deck } = this.props

    return (
      <View style={styles.content}>
        { deck &&
          <View style={styles.content}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.cards}>{deck.questions.length} {deck.questions.length == 1 ? 'card' : 'cards'}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.btn, styles.btnAdd]}
                onPress={() => this.addCardToDeck(deck.title)}>
                <Text style={styles.btnText}>Add Card</Text>
              </TouchableOpacity>
              { deck.questions.length ?
                <TouchableOpacity
                  style={[styles.btn, styles.btnQuiz]}>
                  <Text style={styles.btnText}>Start Quiz</Text>
                </TouchableOpacity> :
                <View style={styles.empty}>
                  <Text style={styles.emptyQuiz}>Empty deck.</Text>
                  <Text style={styles.emptyQuiz}>
                    Please add one or more cards to start a quiz.
                  </Text>
                </View>
              }
            </View>
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps  = (state, ownProps) => ({
  deck: state.deck.deck,
})

const mapDispatchToProps = ({
  deckDetail
})

DeckDetail.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)