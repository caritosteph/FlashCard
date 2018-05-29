import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { fetchDecks } from '../../actions/decks'
import { addCardDeck } from '../../actions/deck'
import { navigateToDeckDetail } from '../../utils/navigation'
import styles from './cards.styles'

class Cards extends Component {

  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

  addNewCard = () => {
    const { question, answer } = this.state
    const { addCardDeck, fetchDecks, navigation } = this.props
    const card = {
      question,
      answer
    }
    const deckTitle = navigation.state.params.item;
    addCardDeck(deckTitle, card)
    .then(()=>fetchDecks())// update the list of decks
    navigation.navigate('DeckDetail', { item: deckTitle })
  }

  render() {

    const { question, answer } = this.state

    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>Question</Text>
        <TextInput
            style={styles.textInput}
            placeholder={'Add new question'}
            value={question}
            onChangeText={question => this.setState({ question })} />
        <Text style={[styles.headerText, styles.marginTop]}>Answer</Text>
        <TextInput
            style={styles.textInput}
            placeholder={'Add the response'}
            value={answer}
            onChangeText={answer => this.setState({ answer })} />
        <TouchableOpacity
          style={[styles.btn, styles.btnSubmit]}
          onPress={this.addNewCard}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = ({
  addCardDeck,
  fetchDecks
})

Cards.propTypes = {

};

export default connect(null, mapDispatchToProps)(Cards)
