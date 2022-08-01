import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import languageDetector from './languageDetector'

// Add more resources here
const RESOURCES = {
  en: require('./translations/en.json'),
}

const resources = Object.fromEntries(
  Object.entries(RESOURCES).map(([lang, translation]) => {
    return [lang, { translation }]
  })
)

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
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
