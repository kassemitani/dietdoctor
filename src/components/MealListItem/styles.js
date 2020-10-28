import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  imageBackground: {width: '100%', aspectRatio: 2},
  image: {width: '100%', height: '100%'},
  contentView: {width: '100%', backgroundColor: colors.white, padding: 15},
  title: {fontFamily: fonts.robotoBold, fontSize: 22, paddingRight: '20%'},
  description: {
    color: colors.lightGrey,
    fontFamily: fonts.robotoMedium,
    fontSize: 14,
    marginVertical: 10,
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
})
