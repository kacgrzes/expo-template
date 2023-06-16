import { Button, Center, Text } from 'native-base'
import { Image, StyleSheet } from 'react-native'

import { darkLogo, lightLogo } from '~constants'
import { useColorScheme } from '~contexts'
import { useCallback, useTranslation } from '~hooks'

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { t } = useTranslation()
  const { colorScheme } = useColorScheme()

  const navigateToDetails = useCallback(() => {
    navigate('Details', { id: 'home-id' })
  }, [navigate])

  return (
    <Center flex={1}>
      <Image
        source={colorScheme === 'light' ? lightLogo : darkLogo}
        style={styles.logo}
        resizeMode="contain"
        resizeMethod="resize"
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

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: '100%',
  },
})
