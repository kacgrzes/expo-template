import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { resources } from '.'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources,
})

export default i18n
