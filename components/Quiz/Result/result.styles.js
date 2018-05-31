import { StyleSheet } from 'react-native'
import { darkGray, gray, lightPurp, skyBlue, white } from '../../../utils/color'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  score: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '800',
  },
  txtScore: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: gray
  },
  txtMessage : {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    color: darkGray,
  },
  actions: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  btn: {
    borderWidth: 0,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  btnRetake: {
    backgroundColor: lightPurp,
    marginLeft: 40,
    marginRight: 40,
  },
  btnDecks: {
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
