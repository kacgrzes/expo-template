import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button } from '~components'

export const ExamplesScreen = () => {
  const { navigate } = useNavigation()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={goToApplicationInfo}>Go to ApplicationInfo</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
