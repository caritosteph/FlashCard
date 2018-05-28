import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './cards.styles'

class Cards extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

  render() {

    return (
      <View style={styles.content}>
        add card
      </View>
    )
  }
}

Cards.propTypes = {

};

export default Cards
