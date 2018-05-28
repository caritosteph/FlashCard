import { StyleSheet } from 'react-native'
import { green, skyBlue, white, gray, red } from '../../utils/color'
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
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 40,
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
  btnText: {
    textAlign: 'center',
    color: white,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    backgroundColor: Platform.OS === 'ios' ? white : 'transparent',
    borderColor: Platform.OS === 'ios' ? gray : white,
    borderRadius: Platform.OS === 'ios' ? 3 : 0,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 40,
    marginRight: 40
  },
})

export default styles
