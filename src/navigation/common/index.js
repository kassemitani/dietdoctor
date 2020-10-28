import {CommonActions} from '@react-navigation/native'

let navigation = null

/**
 *  set the navigator
 */
export function setTopLevelNavigator(navigatorRef) {
  navigation = navigatorRef
}
/**
 *  naviagte to a screen
 */
export function navigateToStack(stack, params) {
  navigation.dispatch(CommonActions.navigate(stack, params))
}

/**
 *  naviagte back to the inital screen
 */
export function resetToStack(stack) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: stack}],
    }),
  )
}

/**
 *  naviagte back to the previous screen
 */
export function goBack() {
  navigation.goBack()
}
