/* styles.js */
import {StyleSheet} from 'react-native'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

// MealPlan styles
export default StyleSheet.create({
  contentContainer: {flexGrow: 1, paddingHorizontal: 10, paddingBottom: 10},
  emptyContainer: {justifyContent: 'center'},
  emptyTitle: {
    color: colors.darkGrey,
    fontFamily: fonts.robotoMedium,
    fontSize: 18,
    textAlign: 'center', // center text
  },
  retryButton: {alignSelf: 'center', marginVertical: 20},
})
