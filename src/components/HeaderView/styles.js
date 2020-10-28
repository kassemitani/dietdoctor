import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../constants'
import {isIphoneX} from '../../constants/variables'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: isIphoneX ? 90 : 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: isIphoneX ? 30 : 0,
    backgroundColor: colors.green,
  },
  itemContainer: {
    height: '100%',
    aspectRatio: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  title: {
    flex: 1,
    color: colors.white,
    fontFamily: fonts.robotoBold,
    textAlign: 'center',
    fontSize: 20,
  },
  cancel: {
    color: colors.white,
    fontFamily: fonts.robotoRegular,
    textAlign: 'center',
    fontSize: 15,
    marginRight: 20,
  },
})
