import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
        <Text style={styles.title}>Quiz</Text>
        <Text style={styles.counter}>
          Questions {`${currentQuestion + 1}/${deck.questions.length}`}
        </Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            {deck.questions[currentQuestion].question}
          </Text>
        </View>
        <TouchableOpacity>
          <Text>Show Answer</Text>
        </TouchableOpacity>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, styles.btnSubmit]}>
            <Text styles={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnDanger]}>
            <Text styles={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Quiz;
