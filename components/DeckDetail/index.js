import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { fetchDeckDetail } from '../../actions/deck'
import styles from './deckDetail.styles'
import mainStyles from '../../assets/main.styles'

class DeckDetail extends Component {

  state = {
    opacity: new Animated.Value(0)
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item
  })

  componentDidMount() {
    const { navigation, fetchDeckDetail, deck } = this.props
    const { opacity } = this.state

    fetchDeckDetail(navigation.state.params.item)
    Animated.timing(opacity, { toValue: 1, duration: 700 }).start()
  }

  addCardToDeck = item => {
    const { navigate } = this.props.navigation
    navigate('Cards', { item })
  }

  startQuiz = item => {
    const { navigate } = this.props.navigation
    navigate('Quiz', { item })
  }

  render() {
    const { deck } = this.props
    const { opacity } = this.state

    return (
      <Animated.View style={[mainStyles.content, { opacity }]}>
        { deck &&
          <View style={mainStyles.content}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.cards}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[mainStyles.btn, mainStyles.btnAdd]}
                onPress={() => this.addCardToDeck(deck.title)}>
                <Text style={mainStyles.btnText}>Add Card</Text>
              </TouchableOpacity>
              { deck.questions.length ?
                <TouchableOpacity
                  style={[mainStyles.btn, mainStyles.btnQuiz]}
                  onPress={() => this.startQuiz(deck)}>
                  <Text style={mainStyles.btnText}>Start Quiz</Text>
                </TouchableOpacity> :
                <View style={styles.empty}>
                  <Text style={styles.emptyQuiz}>Empty deck.</Text>
                  <Text style={styles.emptyQuiz}>Please add one or more cards to start a quiz.</Text>
                </View>
              }
            </View>
          </View>
        }
      </Animated.View>
    )
  }
}

const mapStateToProps  = (state, ownProps) => ({
  deck: state.deck,
})

const mapDispatchToProps = ({
  fetchDeckDetail
})

DeckDetail.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)
