import { StyleSheet } from 'react-native'
import { lightPurp, skyBlue, white, gray, red } from '../../utils/color'
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  marginTop: {
    marginTop: 30,
  },
  btn: {
    overflow: 'hidden',
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  btnSubmit: {
    backgroundColor: lightPurp,
    marginLeft: 40,
    marginRight: 40,
  },
  btnText: {
    textAlign: 'center',
    color: white,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    backgroundColor: Platform.OS === 'ios' ? white : 'transparent',
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 40,
    marginRight: 40
  },
})

export default styles
