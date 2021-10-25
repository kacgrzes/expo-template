// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import React from 'react'
import { ScrollView, Text } from 'react-native'

import { usePreventGoBack, useTranslation, useTheme } from '~hooks'

export const ApplicationInfoScreen = (): JSX.Element => {
  const { i18n } = useTranslation()
  const { s } = useTheme()
  usePreventGoBack()

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.justifyStart, s.p4]}>
      <Text style={[s.textPrimary]}>
        When you will try to go back it will double ask if you really want to leave {'\n'}
      </Text>
      <Text style={[s.textPrimary]}>{Application.applicationId}</Text>
      <Text style={[s.textPrimary]}>{Application.applicationName}</Text>
      <Text style={[s.textPrimary]}>{Application.nativeApplicationVersion}</Text>
      <Text style={[s.textPrimary]}>{Application.nativeBuildVersion}</Text>
      <Text style={[s.textPrimary]}>{i18n.languages.join(', ')}</Text>
    </ScrollView>
  )
}
