import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from '../utils/styles'

export const loader = () => {
  return (
    <View style={styles.activityIndicatorWrapper}>
      <ActivityIndicator animating={true} size='large' color='#000000' />
    </View>
  )
}
