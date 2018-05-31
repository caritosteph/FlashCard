import { StyleSheet } from 'react-native'
import { lightPurp, skyBlue, white, gray, red } from '../../utils/color'
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  marginTop: {
    marginTop: 20,
  },
  btn: {
    overflow: 'hidden',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 30
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
