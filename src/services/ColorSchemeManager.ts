import AsyncStorage from '@react-native-async-storage/async-storage'
import type { StorageManager, ColorMode } from 'native-base'

import { ASYNC_STORAGE_KEYS } from '~constants'

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.COLOR_SCHEME)
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      console.error(e)
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.COLOR_SCHEME, String(value))
    } catch (e) {
      console.error(e)
    }
  },
}
