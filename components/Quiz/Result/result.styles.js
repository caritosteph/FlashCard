import { StyleSheet } from 'react-native'
import { darkGray, gray } from '../../../utils/color'

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
})

export default styles
