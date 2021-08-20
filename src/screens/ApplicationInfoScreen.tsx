import React from 'react'
// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { usePreventGoBack } from '~hooks'

export const ApplicationInfoScreen = () => {
  const { i18n } = useTranslation()
  usePreventGoBack()

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 24,
  },
})
