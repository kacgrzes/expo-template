import { Locale, setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale/pl";
import { fr } from "date-fns/locale/fr";
import { enGB as en } from "date-fns/locale/en-GB";
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
