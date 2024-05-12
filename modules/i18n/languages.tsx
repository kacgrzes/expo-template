import { getLocales } from "expo-localization";

export type Language = {
  id: string;
  name: string;
};

const deviceLanguages = getLocales().map((locale) => locale.languageCode);

export const AVAILABLE_APP_LANGUAGES: Language[] = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "fr",
    name: "Français",
  },
  {
    id: "pl",
    name: "Polski",
  },
];

// make device languages first in the list
export const LANGUAGES = AVAILABLE_APP_LANGUAGES.sort((a, b) => {
  const aIndex = deviceLanguages.indexOf(a.id);
  const bIndex = deviceLanguages.indexOf(b.id);

  if (aIndex === -1) {
    return 1;
  }

  if (bIndex === -1) {
    return -1;
  }

  return aIndex - bIndex;
});
