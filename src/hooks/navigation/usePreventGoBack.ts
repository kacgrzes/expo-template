import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Platform } from 'react-native'

export const usePreventGoBack = (shouldPrevent = true): void => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const alertPolyfill = (title: string, description: string, options: any) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'))

    if (result) {
      const confirmOption = options.find(({ style }: { style: string }) => style !== 'cancel')
      confirmOption && confirmOption.onPress()
    } else {
      const cancelOption = options.find(({ style }: { style: string }) => style === 'cancel')
      cancelOption && cancelOption.onPress()
    }
  }

  const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callback = (event: any) => {
      if (!shouldPrevent) {
        return
      }

      event?.preventDefault()

      alert(
        t('navigation.prevent_go_back_alert.title'),
        t('navigation.prevent_go_back_alert.description'),
        [
          {
            text: t('navigation.prevent_go_back_alert.dont_leave'),
            style: 'cancel',
            onPress: () => undefined,
          },
          {
            text: t('navigation.prevent_go_back_alert.discard'),
            style: 'destructive',
            onPress: () => navigation.dispatch(event?.data?.action),
          },
        ]
      )
    }

    navigation.addListener('beforeRemove', callback)

    return () => navigation.removeListener('beforeRemove', callback)
  }, [navigation, shouldPrevent, t, alert])
}
