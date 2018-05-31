import { StyleSheet } from 'react-native'
import { midPurple, lightPurp, white, green, red } from '../utils/color'
import { Platform } from 'react-native';

const mainStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    backgroundColor: Platform.OS === 'ios' ? white : 'transparent',
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
  },
  btn: {
    borderWidth: 0,
    overflow: 'hidden',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  btnSubmit: {
    backgroundColor: midPurple,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
  },
  btnText: {
    textAlign: 'center',
    color: white,
    fontWeight: 'bold',
  },
  btnAdd: {
    backgroundColor: midPurple,
    marginLeft: 40,
    marginRight: 40,
  },
  btnQuiz: {
    backgroundColor: lightPurp,
    marginLeft: 40,
    marginRight: 40,
  },
  btnRetake: {
    backgroundColor: midPurple,
    marginLeft: 40,
    marginRight: 40,
  },
  btnDecks: {
    backgroundColor: lightPurp,
    marginLeft: 40,
    marginRight: 40,
  },
  btnSuccess: {
    backgroundColor: green,
    marginLeft: 40,
    marginRight: 40,
  },
  btnDanger: {
    backgroundColor: red,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
  },
})

export default mainStyles
