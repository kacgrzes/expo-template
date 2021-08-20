import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotFound screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
