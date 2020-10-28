import {isIPhoneX, isIPhoneXMax} from 'react-native-status-bar-height'

export const regexType = {
  email: /\S+@\S+\.([a-zA-Z]{2,4})$/,
  phone: /^[+]*[\d ]*$/,
  empty: /^\s*$/,
}

export const isIphoneX = isIPhoneX() || isIPhoneXMax()

export const tabBarHeight = isIphoneX ? 85 : 50

export const fieldType = {
  listItem: 'list_item',
  toggle: 'toggle',
  dropdown: 'dropdown',
}

export const reservationStatus = {
  confirmed: 'confirmed',
  pending: 'pending',
  arrived: 'arrived',
  notArrived: 'not_arrived',
  cancelled: 'cancelled',
  tableHasLeft: 'table_has_left',
}

export const recipesType = {
  dinnerIdeas: 'DinnerIdeas',
  newRecipes: 'NewRecipes',
  expplore: 'Explore',
}
