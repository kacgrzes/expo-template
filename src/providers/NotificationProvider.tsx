import * as Notifications from 'expo-notifications'
import { PropsWithChildren, FC } from 'react'

import { NotificationContextProvider, NotificationContextType } from '~contexts'
import { useState, useMemo, useEffect } from '~hooks'
import {
  disableAndroidBackgroundNotificationListener,
  getNotificationFromStack,
  getNotificationStackLength,
} from '~services'

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [permissionStatus, setPermissionStatus] =
    useState<NotificationContextType['permissionStatus']>()
  const [notification, setNotification] = useState<NotificationContextType['notification']>()

  useEffect(() => {
    const getPermissionStatus = async () => {
      const { status } = await Notifications.getPermissionsAsync()
      setPermissionStatus(status)
    }
    getPermissionStatus()
  }, [])

  useEffect(() => {
    while (getNotificationStackLength() > 0) {
      const androidBackgroundNotification = getNotificationFromStack()
      if (androidBackgroundNotification) {
        setNotification(androidBackgroundNotification)
      }
    }
    disableAndroidBackgroundNotificationListener()

    const notificationResponseReceived = Notifications.addNotificationResponseReceivedListener(
      ({ notification }) => {
        setNotification(notification)
      }
    )

    const notificationReceived = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification)
    })

    return () => {
      Notifications.removeNotificationSubscription(notificationResponseReceived)
      Notifications.removeNotificationSubscription(notificationReceived)
    }
  }, [])

  const value = useMemo(
    () => ({
      permissionStatus,
      setPermissionStatus,
      notification,
      setNotification,
    }),
    [notification, permissionStatus]
  )
  return <NotificationContextProvider value={value}>{children}</NotificationContextProvider>
}
