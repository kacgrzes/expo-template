import 'react-i18next'
import english from '~i18n/translations/en.json'

type EN = typeof english

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: EN
    }
  }
}
