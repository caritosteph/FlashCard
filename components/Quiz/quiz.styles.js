import { StyleSheet } from 'react-native'
import { green, darkGreen, white, red, darkRed } from '../../utils/color'

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
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: darkGreen
  },
  card: {
    flex: 1,
    backgroundColor: white,
    margin: 40,
    padding: 20,
    height: 60,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
       width: 2,
       height: 4,
    },
    shadowOpacity: 0.3,
  },
  textLink: {
    textAlign: 'center',
    color: darkRed,
    fontSize: 16
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
    backgroundColor: red,
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
