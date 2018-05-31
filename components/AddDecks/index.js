import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { addDeck } from '../../actions/decks'
import { navigateToDeckDetail } from '../../utils/navigation'
import styles from './addDeck.styles'
import mainStyles from '../../assets/main.styles'

class AddDecks extends Component {

  state =  {
    title: ""
  }

  addNewDeck = () => {
    const { addDeck, navigation } = this.props
    const { title } = this.state

    if(title){
      addDeck(title)
      navigateToDeckDetail(title, navigation)
    } else {
      Alert.alert("Please enter a deck title.");
    }
  }

  render(){

    const { title } = this.state

    return (
        <KeyboardAvoidingView
          style={mainStyles.content}
          behavior="padding">
            <Text style={styles.title}>
              What is the title of your new deck?
            </Text>
            <TextInput
              style={mainStyles.textInput}
              onChangeText={(title) => this.setState({ title })}
              value={title}
              placeholder={'Deck title'} />
            <TouchableOpacity
              style={[mainStyles.btn, mainStyles.btnSubmit]}
              onPress= {this.addNewDeck}>
              <Text style={mainStyles.btnText}>Save deck</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = ({
  addDeck
})

export default connect(null, mapDispatchToProps)(AddDecks)
