import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { addDeck } from '../../actions/decks'
import { navigateToDeckDetail } from '../../utils/navigation'
import styles from './addDeck.styles'

class AddDecks extends Component {

  state =  {
    title: ""
  }

  addNewDeck = () => {
    const { addDeck, navigation } = this.props
    const { title } = this.state

    addDeck(title)
    navigateToDeckDetail(title, navigation)
  }

  render(){

    const { title } = this.state

    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          enabled
          style={styles.content}
          behavior="padding">
          <Text style={styles.title}>
            What is the title of your new deck?
          </Text>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.textInput}
              onChangeText={(title) => this.setState({ title })}
              value={title}
              placeholder={'Deck title'}
            />
            <TouchableOpacity
              style={[styles.btn, styles.btnSubmit]}
              onPress= {this.addNewDeck}>
              <Text style={styles.btnText}>Save deck</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapDispatchToProps = ({
  addDeck
})

export default connect(null, mapDispatchToProps)(AddDecks)
