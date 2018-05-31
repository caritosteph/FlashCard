import { StyleSheet } from 'react-native'
import { gray, darkRed } from '../../utils/color'

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  cards: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: gray,
  },
  actions: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  empty: {
    padding: 30,
  },
  emptyQuiz: {
    fontSize: 14,
    textAlign: 'center',
    color: darkRed
  }
})

export default styles
