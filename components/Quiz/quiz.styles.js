import { StyleSheet } from 'react-native'
import { darkPurple, white, red, darkRed } from '../../utils/color'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: darkPurple
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
})

export default styles
