// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import { ScrollView, Text } from 'native-base'

import { usePreventGoBack, useTranslation } from '~hooks'

export const ApplicationInfoScreen = (): JSX.Element => {
  const { i18n, t } = useTranslation()
  usePreventGoBack()

  return (
    <ScrollView p={4}>
      <Text bold>{t('application_info_screen.navigation_info')}</Text>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>
      <Text>{i18n.languages.join(', ')}</Text>
    </ScrollView>
  )
}
