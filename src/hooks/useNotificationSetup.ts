import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLinkTo } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useAuth } from './useAuth'

import { ASYNC_STORAGE_KEYS } from '~constants'
import { useNotificationContext } from '~contexts'
import { isAuthorizedLink } from '~navigation/linking'
import { registerForPushNotificationsAsync } from '~services'

type Options = {
  /**
   * When *true* automatically handles deeplink provided in notification.
   */
  enableDeeplink?: boolean
}
export const useNotificationSetup = (opts?: Options) => {
  const [deeplink, setDeeplink] = useState<string>()
  const { notification, setNotification } = useNotificationContext()
  const linkTo = useLinkTo()
  const { isSignedIn } = useAuth()

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
      if (!isSignedIn && isAuthorizedPath) {
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.NEXT_DEEP_LINK, deeplinkPath)
        finalDeeplink = '/sign-in'
      }

      const addSlash = !finalDeeplink.startsWith('/')
      finalDeeplink = `${addSlash ? '/' : ''}${finalDeeplink}`

      setDeeplink(finalDeeplink)
      if (opts?.enableDeeplink) {
        linkTo(finalDeeplink)
      }
    },
    [linkTo, isSignedIn, opts?.enableDeeplink]
  )

  // CONFIG: Handle in app notification
  useEffect(() => {
    if (notification) {
      Alert.alert('Notification', JSON.stringify(notification), [
        { text: 'Cancel', onPress: () => setNotification(undefined), style: 'cancel' },
        { text: 'Ok', onPress: () => setNotification(undefined) },
      ])

      const deeplinkPath = notification.request.content.data.deeplink as string | undefined
      handleDeeplink(deeplinkPath)
    }
  }, [handleDeeplink, notification, setNotification])

  return { deeplink }
}
