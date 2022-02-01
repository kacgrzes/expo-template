// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import { ScrollView } from 'react-native'

import { Text } from '~components'
import { usePreventGoBack, useTranslation, useTheme } from '~hooks'

export const ApplicationInfoScreen = (): JSX.Element => {
  const { i18n } = useTranslation()
  const { s } = useTheme()
  usePreventGoBack()

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.justifyStart, s.p4]}>
      <Text>
        When you will try to go back it will double ask if you really want to leave {'\n'}
      </Text>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>
      <Text>{i18n.languages.join(', ')}</Text>
    </ScrollView>
  )
}
