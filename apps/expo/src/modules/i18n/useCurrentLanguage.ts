import { useTranslation } from "react-i18next";
import { LANGUAGES, Language } from "./languages";

export const useCurrentLanguage = () => {
  const { i18n } = useTranslation();

  return LANGUAGES.find((lang) => lang.id === i18n.language) as Language;
};
