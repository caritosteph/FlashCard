import { StyleSheet } from 'react-native'
import { darkGreen, skyBlue, white, gray } from '../../utils/color'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 50,
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
    backgroundColor: darkGreen,
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
})

export default styles
