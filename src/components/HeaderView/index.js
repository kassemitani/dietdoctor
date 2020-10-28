import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './styles'
import backArrow from '../../assets/icons/backArrow/backArrow.png'
import closeIcon from '../../assets/icons/closeIcon/closeIcon.png'

export default function HeaderView(props) {
  const {title, hasBack, onBack, hasClose, onClose, style} = props

  return (
    <View style={[styles.container, style]}>
      <View style={styles.itemContainer}>
        {hasBack && (
          <TouchableOpacity style={styles.itemContainer} onPress={onBack}>
            <Image style={styles.icon} source={backArrow} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemContainer}>
        {hasClose && (
          <TouchableOpacity style={styles.itemContainer} onPress={onClose}>
            <Image style={styles.icon} source={closeIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

HeaderView.defaultProps = {
  hasClose: false,
  hasBack: false,
}
