import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { Button } from '~components'
import { useTheme } from '~hooks'

export const ExamplesScreen = () => {
  const { navigate } = useNavigation()
  const { s } = useTheme()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [])

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Button onPress={goToApplicationInfo} title="Go to ApplicationInfo" />
    </ScrollView>
  )
}
