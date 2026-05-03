"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { defaultLocale, localeStorageKey, messages, supportedLocales, type Locale } from "@/i18n/messages";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageListeners = new Set<() => void>();

function isLocale(value: string | null): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function emitLanguageChange() {
  languageListeners.forEach((listener) => listener());
}

function getClientLocale() {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(localeStorageKey);
  return isLocale(storedLocale) ? storedLocale : defaultLocale;
}

function setClientLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(localeStorageKey, locale);
  emitLanguageChange();
}

function subscribeToLanguage(listener: () => void) {
  languageListeners.add(listener);

  if (typeof window === "undefined") {
    return () => {
      languageListeners.delete(listener);
    };
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === localeStorageKey) {
      listener();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function interpolateMessage(template: string, values?: Record<string, string | number>) {
  if (!values) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = values[key];
    return value === undefined ? match : String(value);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLanguage, getClientLocale, () => defaultLocale);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    document.documentElement.lang = locale === "pt" ? "pt-br" : "en";

    if (window.localStorage.getItem(localeStorageKey) !== locale) {
      window.localStorage.setItem(localeStorageKey, locale);
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: setClientLocale,
      toggleLocale: () => {
        setClientLocale(locale === "pt" ? "en" : "pt");
      },
      t: (key, values) => {
        const template = messages[locale][key] ?? messages[defaultLocale][key] ?? key;
        return interpolateMessage(template, values);
      },
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }

  return context;
}
