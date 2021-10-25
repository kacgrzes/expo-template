import React from 'react'
import { View, Text, Image, ImageStyle } from 'react-native'

import { Button } from '~components'
import { useCallback, useTranslation, useTheme } from '~hooks'

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { t } = useTranslation()
  const { s } = useTheme()

  const navigateToDetails = useCallback(() => {
    navigate('Details', { id: 'home-id' })
  }, [navigate])

  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        style={[s.h24] as ImageStyle[]}
      />
      <Text style={[s.textCenter, s.text2xl, s.textPrimary]}>{t('hello')}</Text>
      <Text style={[s.pY2, s.textCenter, s.textPrimary]}>{t('thanks')}</Text>
      <Text style={[s.pY2, s.textCenter, s.textPrimary]}>{t('app_information')}</Text>
      <Button style={[s.mY2]} onPress={navigateToDetails} title="Details" />
    </View>
  )
}
