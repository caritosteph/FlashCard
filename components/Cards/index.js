import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './cards.styles'

class Cards extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

  render() {

    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>Question</Text>
        <TextInput
            style={styles.textInput}
            placeholder={'Add new question'} />
        <Text style={[styles.headerText, styles.marginTop]}>Answer</Text>
        <TextInput
            style={styles.textInput}
            placeholder={'Add the response'} />
        <TouchableOpacity
          style={[styles.btn, styles.btnSubmit]}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Cards.propTypes = {

};

export default Cards
