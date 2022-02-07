import { Image, ImageStyle } from 'react-native'

import { Button, Center, Spacer, Text } from '~components'
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
    <Center flex={1}>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        style={[s.h24] as ImageStyle[]}
      />
      <Text.H2 center>{t('hello')}</Text.H2>
      <Spacer y={2} />
      <Text center>{t('thanks')}</Text>
      <Spacer y={2} />
      <Text center>{t('app_information')}</Text>
      <Spacer y={4} />
      <Button onPress={navigateToDetails} title="Details" />
    </Center>
  )
}
