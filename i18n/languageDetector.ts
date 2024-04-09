import * as Localization from "expo-localization";
import { LanguageDetectorAsyncModule } from "i18next";

export const languageDetector: LanguageDetectorAsyncModule = {
  async: undefined,
  cacheUserLanguage: () => undefined,
  detect: (callback) => {
    const locales = Localization.getLocales();
    const language = locales[0].languageCode;

    callback?.(language);
  },
  init: () => undefined,
  type: "languageDetector",
};
