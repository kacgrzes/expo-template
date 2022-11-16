import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

export const schedulePushNotification = async (request: Notifications.NotificationRequestInput) => {
  await Notifications.scheduleNotificationAsync(request)
}

export const registerForPushNotificationsAsync = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      throw new Error('Failed to get push token for push notification!')
    }
  } else {
    alert('Must use physical device for Push Notifications')
    throw new Error('Must use physical device for Push Notifications')
  }
}
