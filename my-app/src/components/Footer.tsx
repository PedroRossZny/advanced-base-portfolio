"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="flex min-h-8.5 items-center justify-center bg-transparent px-4 py-1.5 text-[0.82rem] text-(--texto-mutado)">
      <p className="m-0 text-center leading-relaxed">
        <span>{t("por")}</span>
        <a
          href="https://github.com/PedroRossZny"
          target="_blank"
          rel="nofollow"
          className="ml-1 text-(--destaque) no-underline transition-all hover:underline"
        >
          Pedro Ross
        </a>{" "}
        &copy; {year}
      </p>
    </footer>
  );
}
