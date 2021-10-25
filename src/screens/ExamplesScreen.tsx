import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback } from 'react'
import { ScrollView } from 'react-native'

import { Button } from '~components'
import { useTheme } from '~hooks'

export const ExamplesScreen: FC = () => {
  const { navigate } = useNavigation<ExamplesScreenNavigationProps['navigation']>()
  const { s } = useTheme()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToAppSettings = useCallback(() => navigate('Settings'), [navigate])
  const goToComponents = useCallback(() => navigate('Components'), [navigate])
  const goToHomeStackDetails = useCallback(
    () =>
      navigate('HomeStack', {
        screen: 'Details',
        params: { id: 'xdd' },
      }),
    [navigate]
  )

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Button style={s.mB2} onPress={goToApplicationInfo} title="Go to ApplicationInfo" />
      <Button style={s.mB2} onPress={goToComponents} title="Go to Components" />
      <Button style={s.mB2} onPress={goToHomeStackDetails} title="Go to Home Stack Details" />
      <Button style={s.mB2} onPress={goToAppSettings} title="Go to app settings" />
    </ScrollView>
  )
}
