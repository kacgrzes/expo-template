import { Alert, Platform } from 'react-native'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AlertType = typeof Alert.alert
const alertPolyfill: AlertType = (title, description, buttons) => {
  const result = window.confirm([title, description].filter(Boolean).join('\n'))

  if (result) {
    const confirmOption = buttons?.find(({ style }) => style !== 'cancel')
    confirmOption && confirmOption?.onPress?.()
  } else {
    const cancelOption = buttons?.find(({ style }) => style === 'cancel')
    cancelOption && cancelOption?.onPress?.()
  }
}

export const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert
