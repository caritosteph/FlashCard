import { StyleSheet } from 'react-native'
import { green, darkGreen, skyBlue, white, gray, red } from '../../utils/color'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  counter: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
    color: darkGreen
  },
  card: {
    flex: 1,
    backgroundColor: white,
    padding: 20,
    height: 60,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
  },
  cardText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actions: {
    flex: 1,
    marginTop: 30,
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
  btnSubmit: {
    backgroundColor: green,
    marginLeft: 40,
    marginRight: 40,
  },
  btnDanger: {
    backgroundColor: green,
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
