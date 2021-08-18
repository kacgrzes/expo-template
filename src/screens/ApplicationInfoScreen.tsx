import React from 'react'
// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import { ScrollView, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

export const ApplicationInfoScreen = () => {
  const { i18n } = useTranslation()

  return (
    <ScrollView>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>
      <Text>{i18n.languages.join(', ')}</Text>
    </ScrollView>
  )
}
