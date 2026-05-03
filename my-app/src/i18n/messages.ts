import { appsMessages } from "./messages.apps";
import { commonMessages } from "./messages.common";
import { featuredMessages } from "./messages.featured";
import { miniProjectsMessages } from "./messages.mini-projects";
import { showcaseMessages } from "./messages.showcase";
import { studiesMessages } from "./messages.studies";

export const supportedLocales = ["pt", "en"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "pt";
export const localeStorageKey = "idioma";

export const messages: Record<Locale, Record<string, string>> = {
  pt: {
    ...commonMessages.pt,
    ...featuredMessages.pt,
    ...appsMessages.pt,
    ...showcaseMessages.pt,
    ...studiesMessages.pt,
    ...miniProjectsMessages.pt,
  },
  en: {
    ...commonMessages.en,
    ...featuredMessages.en,
    ...appsMessages.en,
    ...showcaseMessages.en,
    ...studiesMessages.en,
    ...miniProjectsMessages.en,
  },
};
