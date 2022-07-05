import { Button, Center, Spacer, Text, Image } from 'native-base'

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
      />
      <Text textAlign={'center'}>{t('hello')}</Text>
      <Spacer y={2} />
      <Text textAlign={'center'}>{t('thanks')}</Text>
      <Spacer y={2} />
      <Text textAlign={'center'}>{t('app_information')}</Text>
      <Spacer y={4} />
      <Button onPress={navigateToDetails}>Details</Button>
    </Center>
  )
}
