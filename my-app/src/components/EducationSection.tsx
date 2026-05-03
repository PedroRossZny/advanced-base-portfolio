"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <article
      id="formacao"
      className="mb-10 rounded-xl border border-(--borda) bg-(--fundo-card) p-6 transition-colors duration-400"
    >
      <header className="mb-6 flex items-center gap-2 border-b-2 border-(--borda) pb-3">
        <div className="flex items-center gap-2 text-(--destaque)">
          <GraduationCap size={24} />
          <h2 className="text-xl font-poppins font-semibold uppercase tracking-wide">
            {t("formacao")}
          </h2>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border-l-[5px] border-(--destaque) bg-(--fundo-principal) px-5 py-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <p className="mb-1 text-sm font-semibold text-(--texto-mutado)">2023 - 2026</p>
          <h3 className="text-lg font-poppins font-bold text-(--texto)">UNIFRAN</h3>
          <p className="text-(--texto-mutado)">{t("curso")}</p>
        </motion.div>
      </div>
    </article>
  );
}
