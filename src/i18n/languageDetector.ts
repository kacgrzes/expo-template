import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import { LanguageDetectorAsyncModule } from 'i18next'

import { ASYNC_STORAGE_KEYS } from '~constants'
const { USER_LANGUAGE } = ASYNC_STORAGE_KEYS
const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // If this is set to true, your detect function receives a callback function that you should call with your language, useful to retrieve your language stored in AsyncStorage for example
  init: () => undefined,
  detect: async () => {
    try {
      await AsyncStorage.getItem(USER_LANGUAGE).then(async (language) => {
        if (language) {
          return Promise.resolve(language)
        }
        const locale = Localization.getLocales()[0].languageCode

        return Promise.resolve(locale)
      })
    } catch {
      const locale = Localization.getLocales()[0].languageCode

      return Promise.resolve(locale)
    }
  },
  cacheUserLanguage: async (language) => {
    try {
      await AsyncStorage.setItem(USER_LANGUAGE, language)
    } catch {
      // TODO: maybe we should handle this somehow?
      console.log('do nothing')
    }
  },
}
export default languageDetector
