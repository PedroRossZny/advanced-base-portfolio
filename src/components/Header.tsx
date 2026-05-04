"use client";

import { GraduationCap, Languages, Laptop, Moon, Sun, Wrench } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const navButtonClassName =
  "flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border-none bg-transparent p-2 text-lg text-[var(--texto)] transition-all duration-300 hover:scale-110 hover:text-[var(--destaque)]";

function subscribeToClientReady() {
  return () => {};
}

function getClientReadySnapshot() {
  return true;
}

function getServerReadySnapshot() {
  return false;
}

export default function Header() {
  const { locale, toggleLocale, t } = useLanguage();
  const { setTheme, resolvedTheme } = useTheme();
  const nextLocale = locale === "pt" ? "en" : "pt";
  const languageLabelKey = nextLocale === "pt" ? "nav-linguagem-pt" : "nav-linguagem-en";
  const isClient = useSyncExternalStore(
    subscribeToClientReady,
    getClientReadySnapshot,
    getServerReadySnapshot,
  );

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const targetElement = document.querySelector<HTMLElement>(targetId);
    const detailsSection = document.getElementById("detalhes");

    if (!targetElement) {
      return;
    }

    if (window.innerWidth <= 1024) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 40;

      window.scrollTo({ top: targetY, behavior: "smooth" });
      return;
    }

    if (detailsSection) {
      detailsSection.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex justify-center border-b border-(--borda) bg-(--fundo-card) px-5 py-2 transition-colors duration-400 lg:justify-end">
      <nav id="menu" className="flex w-full justify-center lg:justify-end">
        <ul className="m-0 flex list-none justify-center gap-4 p-0">
          <li>
            <a
              href="#tecnologias"
              title={t("nav-tecnologias")}
              aria-label={t("nav-tecnologias")}
              onClick={(event) => handleScroll(event, "#tecnologias")}
              className={navButtonClassName}
            >
              <Laptop size={22} />
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              title={t("nav-projetos")}
              aria-label={t("nav-projetos")}
              onClick={(event) => handleScroll(event, "#projetos")}
              className={navButtonClassName}
            >
              <Wrench size={22} />
            </a>
          </li>
          <li>
            <a
              href="#formacao"
              title={t("nav-formacao")}
              aria-label={t("nav-formacao")}
              onClick={(event) => handleScroll(event, "#formacao")}
              className={navButtonClassName}
            >
              <GraduationCap size={22} />
            </a>
          </li>
          <li>
            <button
              type="button"
              title={t(languageLabelKey)}
              aria-label={t(languageLabelKey)}
              onClick={toggleLocale}
              className={navButtonClassName}
            >
              <Languages size={22} />
              <span className="text-[0.72rem] font-semibold uppercase leading-none">{nextLocale}</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              title={t("nav-tema")}
              aria-label={t("nav-tema")}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={navButtonClassName}
            >
              {isClient && resolvedTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
