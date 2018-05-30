import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './quiz.styles'

class Quiz extends Component {

  state = {
    deck: '',
    currentQuestion: 0
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz',
  });

  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      deck: navigation.state.params.item
    })
  }

  render(){

    const { currentQuestion, deck } = this.state

    return (
      <View style={styles.content}>
        <Text style={styles.counter}>
          Question {`${currentQuestion + 1}/${deck && deck.questions.length}`}
        </Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            {deck && deck.questions[currentQuestion].question}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.textLink}>Show Answer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, styles.btnSubmit]}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnDanger]}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Quiz;
