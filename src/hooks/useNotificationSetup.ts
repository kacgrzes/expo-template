import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLinkTo } from '@react-navigation/native'
import * as Notifications from 'expo-notifications'
import { useCallback, useEffect } from 'react'

import { ASYNC_STORAGE_KEYS } from '~constants'
import { authContextRef, useNotificationContext } from '~contexts'
import { registerForPushNotificationsAsync } from '~services'
import { alert } from '~utils'
import { isAuthorizedLink } from '~utils/isAuthorizedLink'

type Options = {
  /**
   * When *true* automatically handles deeplink provided in notification.
   */
  enableDeeplink?: boolean
}

export const useNotificationSetup = (opts?: Options) => {
  const { inAppNotification, setInAppNotification } = useNotificationContext()
  const linkTo = useLinkTo()

  useEffect(() => {
    const initNotifications = async () => {
      await registerForPushNotificationsAsync()
    }
    initNotifications()
  }, [])

  const handleDeeplink = useCallback(
    (deeplinkPath?: string) => {
      if (!deeplinkPath) return

      // Deeplink that is used in `linkTo` method after authorized checks
      let finalDeeplink = deeplinkPath

      const isAuthorizedPath = isAuthorizedLink(deeplinkPath)

      if (!authContextRef.current?.isSignedIn && isAuthorizedPath) {
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.NEXT_DEEP_LINK, deeplinkPath)
        finalDeeplink = '/sign-in'
      }

      const addSlash = !finalDeeplink.startsWith('/')
      finalDeeplink = `${addSlash ? '/' : ''}${finalDeeplink}`

      if (opts?.enableDeeplink) {
        linkTo(finalDeeplink)
      }
    },
    [linkTo, opts?.enableDeeplink]
  )

  // CONFIG: Handle in app notification
  const navigateWithNotification = useCallback(
    (notification: Notifications.Notification) => {
      const { title, body } = notification?.request?.content ?? {}
      alert(title ?? 'Notification', body ?? 'Navigate somewhere', [
        { text: 'Cancel', onPress: () => setInAppNotification(undefined), style: 'cancel' },
        {
          text: 'Ok',
          onPress: () => {
            // Elvis chains prevent crashes in undiscslosed edge cases
            const deeplinkPath = notification?.request?.content?.data?.deeplink as
              | string
              | undefined
            handleDeeplink(deeplinkPath)
          },
        },
      ])
    },
    [handleDeeplink, setInAppNotification]
  )

  useEffect(() => {
    if (inAppNotification) {
      navigateWithNotification(inAppNotification)
    }
  }, [inAppNotification, navigateWithNotification, setInAppNotification])
}
