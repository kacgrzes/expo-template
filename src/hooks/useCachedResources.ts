import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

import { checkForUpdates } from '~utils'
export const useCachedResources = (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'lato-regular': require('assets/fonts/Lato-Regular.ttf'),
          'lato-bold': require('assets/fonts/Lato-Bold.ttf'),
          'lato-extra-bold': require('assets/fonts/Lato-Black.ttf'),
          IcoMoon: require('~assets/icomoon/icomoon.ttf'),
        })
        await checkForUpdates(true)
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
