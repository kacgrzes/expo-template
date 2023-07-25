// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application'
import * as Clipboard from 'expo-clipboard'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import { Button, ScrollView, Text } from 'native-base'

import { isExpoGo } from '~constants'
import { useCallback, usePreventGoBack, useTranslation } from '~hooks'

const projectId = Constants.expoConfig?.extra?.eas?.projectId

export const ApplicationInfoScreen = (): JSX.Element => {
  const { i18n, t } = useTranslation()
  usePreventGoBack()

  const handleCopyPushToken = useCallback(async () => {
    try {
      if (!isExpoGo && !projectId) {
        throw new Error(
          'You must set `projectId` in eas build then value will be avaliable from Constants?.expoConfig?.extra?.eas?.projectId'
        )
      }
      const token = (
        await Notifications.getExpoPushTokenAsync(
          !isExpoGo
            ? {
                projectId,
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
