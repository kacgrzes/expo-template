// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import * as Clipboard from 'expo-clipboard'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import { Button, ScrollView, Text } from 'native-base'

import { isExpoGo } from '~constants'
import { useCallback, usePreventGoBack, useTranslation } from '~hooks'

const experienceId = Constants.expoConfig?.extra?.experienceId

export const ApplicationInfoScreen = (): JSX.Element => {
  const { i18n, t } = useTranslation()
  usePreventGoBack()

  const handleCopyPushToken = useCallback(async () => {
    try {
      if (!isExpoGo && !experienceId) {
        throw new Error(
          'You must provide `experienceId` in app.json `extra` section in order to use notifications without Expo Go.'
        )
      }
      const token = (
        await Notifications.getExpoPushTokenAsync(
          !isExpoGo
            ? {
                experienceId,
              }
            : {}
        )
      ).data

      console.log(token)
      await Clipboard.setStringAsync(token)
      alert('Copied push token to clipboard.')
    } catch (error) {
      console.log('error', error)
    }
  }, [])
  return (
    <ScrollView p={4}>
      <Button size="lg" width="64" my={2} onPress={handleCopyPushToken}>
        {t('settings_screen.copy_push_token')}
      </Button>
      <Text bold>{t('application_info_screen.navigation_info')}</Text>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>
      <Text>{i18n.languages.join(', ')}</Text>
    </ScrollView>
  )
}
