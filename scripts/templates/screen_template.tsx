import { Button, Center, Text } from 'native-base'

import { useCallback, useTranslation } from '~hooks'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const _NAME_Screen = (props: _NAME_ScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { t } = useTranslation()

  const navigateToDetails = useCallback(() => {
    navigate('Home')
  }, [navigate])

  return (
    <Center flex={1}>
      <Text textAlign="center">_NAME_</Text>
      <Text textAlign="center">{t('hello')}</Text>
      <Button mt={4} onPress={navigateToDetails}>
        {t('home_screen.details')}
      </Button>
    </Center>
  )
}
