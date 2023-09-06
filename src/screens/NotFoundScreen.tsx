import { Center, Text } from '~components/atoms'
import { useTranslation } from '~hooks'

export const NotFoundScreen = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Center>
      <Text>{t('errors.screen_not_found')}</Text>
    </Center>
  )
}
