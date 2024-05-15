import { Locale, setDefaultOptions } from "date-fns";
import { pl, fr, enGB as en } from "date-fns/locale";
import i18next from "i18next";

const locales: Record<string, Locale> = { pl, fr, en };

export const setupOnLanguageChange = () => {
  i18next.on("languageChanged", (language) => {
    const locale = locales[language];

    setDefaultOptions({
      locale,
    });
  });
};
