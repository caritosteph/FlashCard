import { StyleSheet } from 'react-native'
import { white } from '../../../utils/color'

const styles = StyleSheet.create({
  deckBox: {
    flex: 1,
    backgroundColor: white,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 10,
    height: 60
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 5
  }
})

export default styles
