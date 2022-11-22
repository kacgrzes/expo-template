import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import languageDetector from './languageDetector'

// Add more resources here
const RESOURCES = {
  en: require('./translations/en.json'),
  pl: require('./translations/pl.json'),
}

export const resources = Object.fromEntries(
  Object.entries(RESOURCES).map(([lang, translation]) => {
    return [lang, { translation }]
  })
)

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // v4 is not available on android
    // check this link - https://www.i18next.com/misc/json-format#i-18-next-json-v4
    // to see the differences between v4 and v3.
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
