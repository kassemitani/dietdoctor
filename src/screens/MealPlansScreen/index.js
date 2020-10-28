import React, {useEffect, useReducer, useState} from 'react'
import {
  RefreshControl,
  StatusBar,
  Text,
  View,
  FlatList,
  NativeModules,
} from 'react-native'
import {gql, ApolloConsumer} from '@apollo/client'
const {SystemInfo} = NativeModules

import MealListItem from '../../components/MealListItem'
import styles from './styles'
import {strings, navigationScreen} from '../../constants'
import HeaderView from '../../components/HeaderView'
import Button from '../../components/Button'
import {navigateToStack} from '../../navigation/common'
import {FREE_MEAL_PLAN_QUERY} from '../../services/queries/freemealplans.query'
import {MEAL_PLAN_FRAGMEMT} from '../../services/fragments/mealplan.fragment'
import {getSystemLanguage, getBundleIdentifier} from '../../helpers'
/**
 *  Screen with list of free meal plans
 */

export default function MealPlansScreen(props) {
  const refresh = useReducer(() => ({}), {})[1]
  const [state, setState] = useState({data: [], loading: true})

  const query = gql`
    ${MEAL_PLAN_FRAGMEMT}
    ${FREE_MEAL_PLAN_QUERY}
  `

  function onMealPlanSelected(mealPlan) {
    navigateToStack(navigationScreen.mealPlanDetail, {mealPlan})
  }

  useEffect(() => {
    //just for testing get the System language
    getSystemLanguage((language) => {
      console.log(`System Langauge is ${language}`) //print the mobile system lanaguge
    })
    //access the client to execute a query
    global.client
      .query({
        query,
      })
      .then((result) => {
        const data = result.data.freeMealplans
        setState({data, loading: false})
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function renderListEmptyComponent() {
    return (
      !state.loading &&
      state.data.length === 0 && (
        <View>
          <Text style={styles.emptyTitle}>
            {strings.common.couldNotFetchData}
          </Text>
          <Button
            style={styles.retryButton}
            title={strings.common.retryAgain}
          />
        </View>
      )
    )
  }

  return (
    <>
      <HeaderView title={strings.screen.mealPlans} />
      <StatusBar barStyle={'light-content'} />
      <FlatList
        testID="meallist"
        data={state.data}
        keyExtractor={(item, index) => (item + index).toString()}
        contentContainerStyle={[
          styles.contentContainer,
          state.data.length === 0 && styles.emptyContainer,
        ]}
        scrollEnabled
        renderItem={({item}) => {
          return (
            <MealListItem
              testID="mealItem"
              item={item}
              onPress={() => onMealPlanSelected(item)}
            />
          )
        }}
        ListEmptyComponent={renderListEmptyComponent}
        refreshControl={
          <RefreshControl
            refreshing={state.loading}
            onRefresh={() => refresh()}
            tintColor={styles.color}
          />
        }
      />
    </>
  )
}
