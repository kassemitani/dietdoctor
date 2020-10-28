import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './styles'

/**
 *  Custom Buttom
 *  @param title title text of the button
 *  @param style styling of the button
 *  @param onPress action when the button is pressed
 */
export default function Button(props) {
  const {title, style, onPress} = props

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
