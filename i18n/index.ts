import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { languageDetector } from "./languageDetector";

i18n
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
  });
