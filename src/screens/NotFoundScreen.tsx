import { Center, Text } from 'native-base'

import { useTranslation } from '~hooks'

export const NotFoundScreen = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Center>
      <Text>{t('errors.screen_not_found')}</Text>
    </Center>
  )
}
