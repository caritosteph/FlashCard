import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './result.styles'

class Result extends Component {

  render(){

    const { correct, totalQuestions } = this.props
    const finalScore = Math.round(correct / totalQuestions * 100)
    const incorrect = totalQuestions - correct
    const excelent = totalQuestions === correct

    return (
      <View style={styles.content}>
        <View  style={styles.content}>
          <Text style={styles.score}>
              {finalScore}%
          </Text>
          <Text style={styles.txtScore}>
              YOUR SCORE
          </Text>
        </View>
        { excelent ?
          <View>
            <Text style={styles.txtScore}>
              Great Job!
            </Text>
            <Text style={styles.txtScore}>
              You aced the test!
            </Text>
          </View>:
          <View>
            <Text style={styles.txtMessage}>
              Keep studing!
            </Text>
            <Text style={styles.txtScore}>
                You missed {incorrect} out of {totalQuestions} questions
            </Text>
          </View>
        }

        <View style={styles.actions}>
          <TouchableOpacity
            //onPress={() => this.retakeQuiz(true)}
            style={[styles.btn, styles.btnRetake]}>
            <Text style={styles.btnText}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => this.gotToDecks(false)}
            style={[styles.btn, styles.btnDecks]}>
            <Text style={styles.btnText}>Go to Decks</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default Result;
