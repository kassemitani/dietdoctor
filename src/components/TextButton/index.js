import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function TextButton(props) {
  const {title, titleStyle, style, onPress} = props

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
