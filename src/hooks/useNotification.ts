import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'
import { useState, useEffect, useRef, useCallback } from 'react'

export const useNotification = () => {
  const [foregroundNotification, setForegroundNotification] = useState<Notifications.Notification>()
  const [backgroundNotification, setBackgroundNotification] =
    useState<Notifications.NotificationResponse>()
  const notificationListener = useRef<Subscription>()
  const responseListener = useRef<Subscription>()

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) =>
      setForegroundNotification(notification)
    )
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) =>
      setBackgroundNotification(response)
    )

    return () => {
      if (notificationListener.current && responseListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current)
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [])

  const clearNotification = useCallback(() => {
    setForegroundNotification(undefined)
    setBackgroundNotification(undefined)
  }, [])

  return {
    foregroundNotification,
    backgroundNotification,
    clearNotification,
  }
}
