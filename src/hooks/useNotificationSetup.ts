import { useEffect } from 'react'
import { Alert } from 'react-native'

import { useNotificationContext } from '~contexts'
import { registerForPushNotificationsAsync } from '~services'

export const useNotificationSetup = () => {
  const { notification, setNotification } = useNotificationContext()

  useEffect(() => {
    const initNotifications = async () => {
      await registerForPushNotificationsAsync()
    }
    initNotifications()
  }, [])

  // CONFIG: Handle in app notification
  useEffect(() => {
    if (notification) {
      Alert.alert('Notification', JSON.stringify(notification), [
        { text: 'Cancel', onPress: () => setNotification(undefined), style: 'cancel' },
        { text: 'Ok', onPress: () => setNotification(undefined) },
      ])
    }
  }, [notification, setNotification])
}
