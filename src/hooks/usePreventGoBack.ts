import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

export const usePreventGoBack = (shouldPrevent = true) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.addListener('beforeRemove', (event) => {
      if (!shouldPrevent) {
        return
      }

      event.preventDefault()

      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure to discard them and leave the screen?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => {} },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.dispatch(event.data.action),
          },
        ]
      )
    })
  }, [navigation, shouldPrevent])
}
