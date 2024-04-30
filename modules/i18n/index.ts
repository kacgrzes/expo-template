import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { languageDetector } from "./languageDetector";
import enCommon from "./locales/en/common.json";
import frCommon from "./locales/fr/common.json";
import plCommon from "./locales/pl/common.json";

export const resources = {
  en: {
    common: enCommon,
  },
  fr: {
    common: frCommon,
  },
  pl: {
    common: plCommon,
  },
};

export const i18n = i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    cleanCode: true,
    compatibilityJSON: "v4",
    defaultNS: "common",
    debug: __DEV__,
    fallbackLng: "en",
    load: "languageOnly",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    resources,
  });
