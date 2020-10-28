import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {setTopLevelNavigator} from './navigation/common'
import MainStackScreen from './navigation'
import navigationStack from './constants/navigationStack'

const RootStack = createStackNavigator()

/**
 *  Screen with list of free meal plans
 */
export default function App() {
  function RootStackScreen() {
    return (
      <RootStack.Navigator mode={'modal'} headerMode={'none'}>
        <RootStack.Screen
          name={navigationStack.mainStack}
          component={MainStackScreen}
        />
      </RootStack.Navigator>
    )
  }

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        setTopLevelNavigator(navigatorRef)
      }}>
      {RootStackScreen()}
    </NavigationContainer>
  )
}
