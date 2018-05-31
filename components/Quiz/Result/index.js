import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './result.styles'
import mainStyles from '../../../assets/main.styles'

const Result = ({ correct, totalQuestions, retakeQuiz, gotToDecks }) => {

  const finalScore = Math.round(correct / totalQuestions * 100)
  const incorrect = totalQuestions - correct
  const excelent = totalQuestions === correct

  return (
    <View style={mainStyles.content}>
      <View  style={mainStyles.content}>
        <Text style={styles.score}>
            {finalScore}%
        </Text>
        <Text style={styles.txtScore}>
            YOUR SCORE
        </Text>
      </View>
      { excelent ?
        <View>
          <Text style={styles.txtMessage}>
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
          onPress={retakeQuiz}
          style={[mainStyles.btn, mainStyles.btnRetake]}>
          <Text style={mainStyles.btnText}>Retake</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={gotToDecks}
          style={[mainStyles.btn, mainStyles.btnDecks]}>
          <Text style={mainStyles.btnText}>Go to Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;
