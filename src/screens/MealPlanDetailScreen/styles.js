/* styles.js */
import {StyleSheet} from 'react-native'
import {colors, fonts} from '../../constants'

// MealPlanDetail styles
export default StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    marginTop: 15,
    width: '100%',
    aspectRatio: 3 / 2,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  emptyContainer: {justifyContent: 'center'},
  image: {width: '100%', aspectRatio: 3 / 2},
  title: {
    paddingTop: 10,
    color: 'black',
    fontFamily: fonts.robotoBold,
    fontSize: 21,
    textAlign: 'left', // center text
  },
  headerView: {backgroundColor: colors.transparent},
  description: {
    paddingTop: 10,
    color: 'black',
    fontFamily: fonts.robotoRegular,
    fontSize: 12,
    textAlign: 'left',
  },
  tagConatiner: {
    alignSelf: 'baseline',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    borderColor: colors.green,
    borderWidth: 1,
    marginLeft: 5,
  },
  tagTitle: {color: colors.green},
  bodyContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-around',
  },
})
