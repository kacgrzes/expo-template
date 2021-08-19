import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button } from '~components'

export const ExamplesScreen = () => {
  const { navigate } = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={() => navigate('ApplicationInfo')}>Go to ApplicationInfo</Button>
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
