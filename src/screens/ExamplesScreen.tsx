import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, ScrollView, Text } from 'react-native'

export const ExamplesScreen = () => {
  const { navigate } = useNavigation()

  return (
    <ScrollView>
      <Pressable onPress={() => navigate('ApplicationInfo')}>
        <Text>Hello!</Text>
      </Pressable>
    </ScrollView>
  )
}
