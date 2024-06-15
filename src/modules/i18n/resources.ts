import { Resource } from "i18next";

type Locale = Record<string, object>;

class Resources {
  languages: string[];
  resources: Resource;

  constructor(languages: string[]) {
    this.resources = {} as any;
    this.languages = languages;
  }

  register(ns: string, locales: Locale) {
    this.languages.forEach((lang) => {
      this.resources[lang] = {
        ...this.resources[lang],
        [ns]: locales[lang],
      };
    });
  }

  getResources() {
    return this.resources;
  }
}

export const resources = new Resources(["pl", "en", "fr"] as const);
