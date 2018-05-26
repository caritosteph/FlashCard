import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './addDeck.styles'

class AddDecks extends Component {
  render(){
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.content}>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.textInput}
            placeholder={'Deck title'}
          />
          <TouchableOpacity
            style={[styles.btn, styles.btnSubmit]}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddDecks
