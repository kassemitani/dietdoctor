import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import navigationScreen from '../constants/navigationScreen'
import MealPlansScreen from '../screens/MealPlansScreen'
import MealPlanDetailScreen from '../screens/MealPlanDetailScreen'

const MainStack = createStackNavigator()

/**
 *  Main Navigation Stack
 */
export default function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode={'none'}>
      <MainStack.Screen
        name={navigationScreen.mealPlans}
        component={MealPlansScreen}
      />
      <MainStack.Screen
        name={navigationScreen.mealPlanDetail}
        component={MealPlanDetailScreen}
      />
    </MainStack.Navigator>
  )
}
