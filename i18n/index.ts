import "intl-pluralrules";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { languageDetector } from "./languageDetector";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

export const i18n = i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    cleanCode: true,
    compatibilityJSON: "v4",
    debug: __DEV__,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    resources,
  });
