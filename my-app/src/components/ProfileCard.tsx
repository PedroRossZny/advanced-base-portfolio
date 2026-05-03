"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
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
            src="/images/pedro.jpg"
            alt="Foto de Pedro Henrique Rodrigues Ross"
            fill
            className="rounded-full border-4 border-(--fundo-principal) object-cover outline-3 outline-(--destaque)"
          />
        </div>

        <h1 className="mb-2.5 text-center text-[1.4em] font-poppins font-bold text-(--destaque)">
          Pedro Henrique Rodrigues Ross
        </h1>

        <p className="mx-auto mb-2.5 max-w-[32ch] text-center text-[0.8em] leading-relaxed">
          {t("perfil-descricao")}
        </p>

        <div className="flex justify-center gap-4 pt-2 text-[1.4em]">
          <a
            href="mailto:pedrohenriquerodriguesross@gmail.com"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-ross"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/PedroRossZny"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/pedro.rzny/"
            target="_blank"
            rel="nofollow"
            className="text-(--texto-mutado) transition-all duration-300 hover:scale-110 hover:text-(--destaque)"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </article>
    </motion.section>
  );
}
