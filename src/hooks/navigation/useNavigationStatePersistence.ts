import AsyncStorage from '@react-native-async-storage/async-storage'
import { getInitialURL } from 'expo-linking'
import { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import { isProduction } from '~constants'

const PERSISTENCE_KEY = '@template/navigation-state'
const EXPO_LINK_REGEXP = /^exp:\/\/\d+\.\d+\.\d+\.\d+:\d*$/

const checkInitialURL = (initialUrl: string | null) => {
  return initialUrl == null || initialUrl.match(EXPO_LINK_REGEXP) !== null
}

export const useNavigationStatePersistence = () => {
  const [isReady, setIsReady] = useState(isProduction)
  const [initialState, setInitialState] = useState()

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await getInitialURL()

        if (Platform.OS !== 'web' && checkInitialURL(initialUrl)) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
          const state = savedStateString ? JSON.parse(savedStateString) : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  const onStateChange = useCallback((state) => {
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
  }, [])

  return {
    initialState,
    onStateChange,
    isReady,
  }
}
