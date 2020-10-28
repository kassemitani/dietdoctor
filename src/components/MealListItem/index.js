import React, {useState} from 'react'
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import Config from 'react-native-config'
import styles from './styles'
import TextButton from '../TextButton'

export default function MealListItem(props) {
  const {item, onPress} = props
  const [loadingImage, setLoadingImage] = useState(true)
  const placeholder = require('../../assets/animations/placeholder.gif')

  let imageUrl = ''
  const schedule = item.schedule || []
  if (schedule.length > 0 && schedule[0].dinner) {
    const recipesDetails = schedule[0].dinner.recipesDetails || []
    if (recipesDetails.length > 0) {
      const image = recipesDetails[0].images.hz
      imageUrl = `${Config.MEDIA_URL}${image}${Config.MEDIA_QUERY}`
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow]}
      onPress={onPress}>
      <ImageBackground
        style={styles.imageBackground}
        source={loadingImage ? placeholder : null}>
        <Image
          style={styles.image}
          source={imageUrl ? {uri: imageUrl} : null}
          onLoadEnd={() => setLoadingImage(false)}
        />
      </ImageBackground>
      <View style={styles.contentView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {item.description}
        </Text>
        <TextButton
          style={styles.tagConatiner}
          title={item.type}
          titleStyle={styles.tagTitle}
        />
      </View>
    </TouchableOpacity>
  )
}
