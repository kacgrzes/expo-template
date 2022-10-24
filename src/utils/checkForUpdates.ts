import * as Updates from 'expo-updates'
import i18n from 'i18next'
import { Alert } from 'react-native'

import { wait } from './wait'

import { isDevelopment } from '~constants'

let isAlertOpened = false

export const checkForUpdates = async (shouldReload?: boolean) => {
  if (isDevelopment) return
  try {
    const update = await Updates.checkForUpdateAsync()

    if (!update.isAvailable) return
    await Updates.fetchUpdateAsync()

    if (shouldReload) {
      await wait(500)
      await Updates.reloadAsync()
      return
    }

    if (isAlertOpened) return
    isAlertOpened = true

    Alert.alert(i18n.t('update.alert_title'), i18n.t('update.alert_message'), [
      {
        text: i18n.t('common.cancel'),
        onPress: () => {
          isAlertOpened = false
        },
        style: 'cancel',
      },
      {
        text: i18n.t('update.restart'),
        onPress: async () => {
          await Updates.reloadAsync()
        },
      },
    ])
  } catch (e) {
    console.log('There was some error while checking updates', e)
  }
}
