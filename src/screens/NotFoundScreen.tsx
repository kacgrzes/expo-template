import { View, Text } from 'react-native'

import { useTheme, useTranslation } from '~hooks'

export const NotFoundScreen = (): JSX.Element => {
  const { s } = useTheme()
  const { t } = useTranslation()
  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Text style={[s.textPrimary]}>{t('errors.screen_not_found')}</Text>
    </View>
  )
}
