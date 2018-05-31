import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  Alert,
  KeyboardAvoidingView
} from 'react-native'
import { fetchDecks } from '../../actions/decks'
import { addCardDeck } from '../../actions/deck'
import { navigateToDeckDetail } from '../../utils/navigation'
import styles from './cards.styles'

class Cards extends Component {

  state = {
    question: '',
    answer: '',
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

  addNewCard = () => {
    const { question, answer, opacity } = this.state
    const { addCardDeck, fetchDecks, navigation } = this.props
    const card = {
      question,
      answer
    }
    const deckTitle = navigation.state.params.item;

    if(question && answer){
      addCardDeck(deckTitle, card)
      .then(()=>fetchDecks())// update the list of decks
      navigation.navigate('DeckDetail', { item: deckTitle })
    } else {
      if(!question) {
        Alert.alert("Please enter the question.");
      } else {
        Alert.alert("Please enter the answer.");
      }
    }
  }

  render() {

    const { question, answer, opacity } = this.state

    return (
      <Animated.View style={[styles.content, {opacity}]}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior="padding">
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
          <Text style={styles.btnText}>Save card</Text>
        </TouchableOpacity>
          </KeyboardAvoidingView>
      </Animated.View>
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
