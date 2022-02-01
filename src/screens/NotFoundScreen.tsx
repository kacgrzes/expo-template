import { View } from 'react-native'

import { Text } from '~components'
import { useTheme, useTranslation } from '~hooks'

export const NotFoundScreen = (): JSX.Element => {
  const { s } = useTheme()
  const { t } = useTranslation()
  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Text>{t('errors.screen_not_found')}</Text>
    </View>
  )
}
