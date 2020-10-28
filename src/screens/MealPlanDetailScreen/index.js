import {SafeAreaView, Text, Image, View, processColor} from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import {ScrollView} from 'react-native-gesture-handler'
import {PieChart} from 'react-native-charts-wrapper'

import styles from './styles'
import HeaderView from '../../components/HeaderView'
import TextButton from '../../components/TextButton'
import {goBack} from '../../navigation/common'
import {colors, strings} from '../../constants'
import nutritionChartConfig from './nutritionChartConfig'

/**
 *  Screen that shows detail inforrmation of a meal plan
 */
export default function MealPlanDetailScreen(props) {
  const {route} = props
  const params = route.params || {}
  const {mealPlan} = params

  const nutritionAverage = mealPlan.nutritionAverage.percentages

  for (const property in nutritionAverage) {
    if (property === '__typename') {
      continue
    }
    nutritionChartConfig.data.dataSets[0].values.push({
      value: nutritionAverage[property],
      label: property,
    })
  }

  let imageUrl = ''
  const schedule = mealPlan.schedule || []
  if (schedule.length > 0 && schedule[0].dinner) {
    const recipesDetails = schedule[0].dinner.recipesDetails || []
    if (recipesDetails.length > 0) {
      const image = recipesDetails[0].images.hz
      imageUrl = `${Config.MEDIA_URL}${image}${Config.MEDIA_QUERY}`
    }
  }

  return (
    <>
      <HeaderView
        hasBack
        onBack={() => {
          goBack()
        }}
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={styles.image}
            source={imageUrl ? {uri: imageUrl} : null}
          />
          <View style={styles.bodyContainer}>
            <TextButton
              style={styles.tagConatiner}
              title={mealPlan.type}
              titleStyle={styles.tagTitle}
            />
            <Text testID="title" style={styles.title}>
              {mealPlan.title}
            </Text>
            <Text style={styles.description}>{mealPlan.description}</Text>
            <PieChart
              style={styles.chart}
              chartDescription={nutritionChartConfig.description}
              data={nutritionChartConfig.data}
              legend={nutritionChartConfig.legend}
              entryLabelColor={processColor(colors.green)}
              entryLabelTextSize={20}
              entryLabelFontFamily={'HelveticaNeue-Medium'}
              rotationEnabled={true}
              rotationAngle={45}
              styledCenterText={{}}
              maxAngle={350}
              onSelect={(event) => console.log(event.nativeEvent)}
              onChange={(event) => console.log(event.nativeEvent)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
