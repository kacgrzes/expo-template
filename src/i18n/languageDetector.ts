import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import { LanguageDetectorAsyncModule } from 'i18next'

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // If this is set to true, your detect function receives a callback function that you should call with your language, useful to retrieve your language stored in AsyncStorage for example
  init: () => undefined,
  detect: async (callback: (language: string) => void) => {
    try {
      await AsyncStorage.getItem('@luvvre/user-language').then(async (language) => {
        if (language) {
          return callback(language)
        }

        const { locale } = await Localization.getLocalizationAsync()

        return callback(locale)
      })
    } catch (error) {
      const { locale } = await Localization.getLocalizationAsync()

      return callback(locale)
    }
  },
  cacheUserLanguage: async (language) => {
    try {
      await AsyncStorage.setItem('@luvvre/user-language', language)
    } catch (error) {
      // TODO: maybe we should handle this somehow?
      console.log('do nothing')
    }
  },
}

export default languageDetector
