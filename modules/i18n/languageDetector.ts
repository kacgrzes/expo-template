import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageDetectorAsyncModule } from "i18next";

import { deviceLanguages } from "./deviceLanguages";

const USER_LANGUAGE_KEY = "user-language";

export const languageDetector: LanguageDetectorAsyncModule = {
  async: true,
  cacheUserLanguage: async (language) => {
    await AsyncStorage.setItem(USER_LANGUAGE_KEY, language);
  },
  detect: async () => {
    const userLanguage = await AsyncStorage.getItem(USER_LANGUAGE_KEY);

    if (userLanguage) {
      return userLanguage;
    }

    const deviceLanguage = deviceLanguages[0];

    if (deviceLanguage) {
      return deviceLanguage;
    }
  },
  init: () => undefined,
  type: "languageDetector",
};
