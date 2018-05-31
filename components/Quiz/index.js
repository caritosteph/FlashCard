import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Result from './Result'
import styles from './quiz.styles'

class Quiz extends Component {

  state = {
    deck: '',
    currentQuestion: 0,
    endQuiz: false,
    correct: 0,
    showAnswer: false
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

  checkQuestion = (isCorrect) => {
    const { deck, currentQuestion } = this.state

    if(isCorrect) {
      this.setState(state => ({
        correct: state.correct + 1
      }))
    }
    if(deck.questions.length - 1 > currentQuestion) {
      this.setState(state => ({
        currentQuestion: state.currentQuestion + 1
      }))
    } else {
      this.setState({
        endQuiz: true
      })
    }
    this.setState({
      showAnswer: false
    })
  }

  retakeQuiz = (item) => {
    this.setState({
      currentQuestion: 0,
      endQuiz: false,
      correct: 0
    })
  }

  gotToDecks = () => {
    const { navigate } = this.props.navigation

    navigate('Home')
  }

  showQuizAnwser = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }))
  }

  render(){

    const { currentQuestion, deck, endQuiz, correct, showAnswer } = this.state

    return (
        <View style={styles.content}>
          { endQuiz ?
            <Result
              correct={correct}
              totalQuestions ={deck.questions.length}
              retakeQuiz={this.retakeQuiz}
              gotToDecks={this.gotToDecks} /> :
          <View style={styles.content}>
            <Text style={styles.counter}>
              Question {`${currentQuestion + 1}/${deck && deck.questions.length}`}
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                {showAnswer
                  ? deck && deck.questions[currentQuestion].answer
                  : deck && deck.questions[currentQuestion].question}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={this.showQuizAnwser}>
                <Text style={styles.textLink}>{showAnswer ? 'Show question' : 'Show answer'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => this.checkQuestion(true)}
                style={[styles.btn, styles.btnSubmit]}>
                <Text style={styles.btnText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.checkQuestion(false)}
                style={[styles.btn, styles.btnDanger]}>
                <Text style={styles.btnText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        </View>
    )
  }
}

export default Quiz;
