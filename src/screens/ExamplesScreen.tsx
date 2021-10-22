import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback } from 'react'
import { ScrollView } from 'react-native'

import { Button } from '~components'
import { useTheme } from '~hooks'

export const ExamplesScreen: FC = () => {
  const { navigate } = useNavigation()
  const { s } = useTheme()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToAppSettings = useCallback(() => navigate('Settings'), [navigate])

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Button onPress={goToApplicationInfo} title="Go to ApplicationInfo" />
      <Button onPress={goToAppSettings} title="Go to app settings" />
    </ScrollView>
  )
}
