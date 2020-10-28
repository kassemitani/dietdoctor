import {Platform, Alert, NativeModules} from 'react-native'
const {SystemInfo} = NativeModules
// Get mobile system lanaguge
function getSystemLanguage(callback) {
  if (Platform.OS === 'ios') {
    return SystemInfo.getLanguage((language) => {
      callback(language)
    })
  }
  Alert.alert(`This feature is Not supported on ${Platform.OS.toUpperCase()}`)
}

// Get app bundle Identifier
function getBundleIdentifier(callback) {
  if (Platform.OS === 'ios') {
    return SystemInfo.getBundleIdentifier((identifier) => {
      callback(identifier)
    })
  }
  Alert.alert(`This feature is Not supported on ${Platform.OS.toUpperCase()}`)
}

export {getSystemLanguage, getBundleIdentifier}
