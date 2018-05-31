import { StyleSheet } from 'react-native'
import { lightPurp, skyBlue, white, gray, red } from '../../utils/color'
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    textAlign: 'center',
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
    marginBottom: 30,
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
})

export default styles
