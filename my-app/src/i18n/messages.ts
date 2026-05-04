import { commonMessages } from "./messages.common";
import { projectsMessages } from "./messages.projects";

export const supportedLocales = ["pt", "en"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "pt";
export const localeStorageKey = "idioma";

export const messages: Record<Locale, Record<string, string>> = {
  pt: {
    ...commonMessages.pt,
    ...projectsMessages.pt,
  },
  en: {
    ...commonMessages.en,
    ...projectsMessages.en,
  }
};
