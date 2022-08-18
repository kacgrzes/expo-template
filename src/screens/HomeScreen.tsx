import { Button, Center, Text, Image } from 'native-base'

import { useCallback, useTranslation } from '~hooks'

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { t } = useTranslation()

  const navigateToDetails = useCallback(() => {
    navigate('Details', { id: 'home-id' })
  }, [navigate])

  return (
    <Center flex={1}>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        height={24}
        alt="logo"
      />
      <Text textAlign="center">{t('hello')}</Text>
      <Text textAlign="center">{t('thanks')}</Text>
      <Text textAlign="center">{t('app_information')}</Text>
      <Button mt={4} onPress={navigateToDetails}>
        {t('home_screen.details')}
      </Button>
    </Center>
  )
}
