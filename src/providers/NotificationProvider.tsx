import * as Notifications from 'expo-notifications'
import { PropsWithChildren, FC, useEffect } from 'react'

import { NotificationContextProvider, NotificationContextType } from '~contexts'
import { useState, useMemo } from '~hooks'

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

  const value = useMemo(
    () => ({ permissionStatus, setPermissionStatus, notification, setNotification }),
    [notification, permissionStatus]
  )
  return <NotificationContextProvider value={value}>{children}</NotificationContextProvider>
}
