import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import Result from './Result'
import { setLocalNotification, clearLocalNotification } from '../../utils/notifications'
import styles from './quiz.styles'
import mainStyles from '../../assets/main.styles'

class Quiz extends Component {

  state = {
    deck: '',
    currentQuestion: 0,
    endQuiz: false,
    correct: 0,
    showAnswer: false,
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { navigation } = this.props
    const { opacity } = this.state

    this.setState({
      deck: navigation.state.params.item
    })
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz',
  });

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
      clearLocalNotification().then(setLocalNotification);

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

  gotToDeck = () => {
    const { navigate } = this.props.navigation
    const { deck } = this.state

    return navigate('DeckDetail', { item: deck.title })
  }

  showQuizAnwser = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }))
  }

  render(){

    const { currentQuestion, deck, endQuiz,
            correct, showAnswer, opacity } = this.state

    return (
        <Animated.View style={[mainStyles.content, {opacity}]}>
          { endQuiz ?
            <Result
              correct={correct}
              totalQuestions ={deck.questions.length}
              retakeQuiz={this.retakeQuiz}
              gotToDecks={this.gotToDeck} /> :
          <View style={mainStyles.content}>
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
                style={[mainStyles.btn, mainStyles.btnSuccess]}>
                <Text style={mainStyles.btnText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.checkQuestion(false)}
                style={[mainStyles.btn, mainStyles.btnDanger]}>
                <Text style={mainStyles.btnText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </Animated.View>
    )
  }
}

export default Quiz;
