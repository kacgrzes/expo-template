import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { languageDetector } from "./languageDetector";
import { resources } from "./resources";
import { dateLocales, setupOnLanguageChange } from "./setupOnLanguageChange";
import {
  isDate,
  format as formatDate,
  formatRelative,
  formatDistance,
} from "date-fns";

setupOnLanguageChange();

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
      format: (value, format, lang) => {
        if (isDate(value) && format && lang) {
          const locale = dateLocales[lang];

          if (format === "short") {
            return formatDate(value, "P", { locale });
          }
          if (format === "long") {
            return formatDate(value, "PPPP", { locale });
          }
          if (format === "relative") {
            return formatRelative(value, new Date(), { locale });
          }
          if (format === "ago") {
            return formatDistance(value, new Date(), {
              locale,
              addSuffix: true,
            });
          }

          return formatDate(value, format, { locale });
        }

        return value;
      },
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    resources: resources.getResources(),
  });
