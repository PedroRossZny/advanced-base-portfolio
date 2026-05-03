"use client";

import { motion } from "framer-motion";
import { Cpu, Laptop } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { technologyGroups, type TechnologyItem } from "@/data/technologies";

interface TechSectionProps {
  activeFilter: string;
  onFilterSelect: (code: string) => void;
}

function TechnologyIcon({ technology }: { technology: TechnologyItem }) {
  if (technology.iconType === "custom") {
    switch (technology.icon) {
      case "iot":
        return <Cpu size={18} className="shrink-0" />;
      default:
        return null;
    }
  }

  return <i className={`${technology.icon} text-lg`} />;
}

export default function TechSection({ activeFilter, onFilterSelect }: TechSectionProps) {
  const { t } = useLanguage();

  return (
    <article
      id="tecnologias"
      className="mb-6 rounded-xl border border-(--borda) bg-(--fundo-card) p-6 transition-colors duration-400"
    >
      <header className="mb-8 flex flex-col gap-2 border-b-2 border-(--borda) pb-3 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-(--destaque)">
          <Laptop size={24} />
          <h2 className="text-xl font-poppins font-semibold uppercase tracking-wide">
            {t("titulo-tecnologias")}
          </h2>
        </div>
        <span className="text-[0.75rem] italic text-(--texto-mutado) md:ml-2">
          {t("dica-filtro")}
        </span>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {technologyGroups.map((group, index) => (
          <motion.div
            key={group.categoryKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-4 rounded-xl border border-(--borda) bg-(--fundo-principal) p-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--destaque) hover:shadow-lg"
          >
            <h3 className="border-b-2 border-(--borda) pb-2 text-[1.05em] font-poppins font-semibold text-(--destaque)">
              {t(group.categoryKey)}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.techs.map((tech) => {
                const label = tech.labelKey ? t(tech.labelKey) : tech.label;

                return (
                  <button
                    key={tech.filter}
                    type="button"
                    onClick={() => onFilterSelect(tech.filter)}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-all duration-300 active:scale-95 active:opacity-80
                      ${
                        activeFilter === tech.filter
                          ? "border-(--destaque) bg-(--destaque) text-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] -translate-y-0.5"
                          : "border-(--borda) bg-(--fundo-card) text-(--texto) hover:-translate-y-1 hover:border-(--destaque) hover:bg-(--fundo-card) hover:text-(--destaque)"
                      }`}
                  >
                    <TechnologyIcon technology={tech} />
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </article>
  );
}
