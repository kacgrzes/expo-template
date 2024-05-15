import { getLocales } from "expo-localization";

export const deviceLanguages = getLocales().map(
  (locale) => locale.languageCode,
);
