import { Locale, setDefaultOptions } from "date-fns";
import { enGB as en } from "date-fns/locale/en-GB";
import { fr } from "date-fns/locale/fr";
import { pl } from "date-fns/locale/pl";
import i18next from "i18next";

export const dateLocales: Record<string, Locale> = { pl, fr, en };

export const setupOnLanguageChange = () => {
  i18next.on("languageChanged", (language) => {
    const locale = dateLocales[language];

    setDefaultOptions({
      locale,
    });
  });
};
