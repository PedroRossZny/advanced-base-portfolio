"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCircleQuestion } from "react-icons/fa6";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProfileCard() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="ficha"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-0 pr-0 md:overflow-y-auto md:pr-2.5"
    >
      <article className="mb-6 rounded-xl border border-(--borda) bg-(--fundo-card) p-5 transition-colors duration-400">
        <div className="relative mx-auto mb-2.5 h-45 w-45">
          <Image
            src="/images/default-avatar.jpg"
            alt="Foto de Perfil"
            fill
            className="rounded-full border-4 border-(--fundo-principal) object-cover outline-3 outline-(--destaque)"
          />
        </div>

        <h1 className="mb-2.5 text-center text-[1.4em] font-poppins font-bold text-(--destaque)">
          XXXXX XXXXXXXX XXXXXXXXX XXXXXXX
        </h1>

        <p className="mx-auto mb-2.5 max-w-[32ch] text-center text-[0.8em] leading-relaxed">
          {t("perfil-descricao")}
        </p>

        <div className="flex justify-center gap-4 pt-2 text-[1.4em]">
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaCircleQuestion size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaCircleQuestion size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaCircleQuestion size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaCircleQuestion size={24} />
          </a>
        </div>
      </article>
    </motion.section>
  );
}
