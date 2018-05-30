import { StyleSheet } from 'react-native'
import { lightPurp, skyBlue, white, gray, red } from '../../utils/color'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
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
  btn: {
    borderRadius: 3,
    borderWidth: 0,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  btnAdd: {
    backgroundColor: lightPurp,
    marginLeft: 40,
    marginRight: 40,
  },
  btnQuiz: {
    backgroundColor: skyBlue,
    marginLeft: 40,
    marginRight: 40,
  },
  btnText: {
    textAlign: 'center',
    color: white,
    fontWeight: 'bold',
  },
  empty: {
    padding: 30,
  },
  emptyQuiz: {
    fontSize: 14,
    textAlign: 'center',
    color: red
  }
})

export default styles
