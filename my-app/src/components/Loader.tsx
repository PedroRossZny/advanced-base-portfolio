"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Otimizador de imagens nativo do Next.js

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex flex-col justify-center items-center bg-(--fundo-principal) z-9999 overflow-hidden"
        >
          {/* Glow Fundo */}
          <div className="absolute w-87.5 h-87.5 rounded-full opacity-15 animate-[pulsarGlow_2s_infinite_alternate_ease-in-out] z-0" 
               style={{ background: "radial-gradient(circle, var(--destaque) 0%, transparent 60%)" }} />
          
          <div className="relative w-50 h-50 flex justify-center items-center z-10">
            {/* Spinner Externo */}
            <div className="absolute w-47.5 h-47.5 rounded-full border-2 border-dashed border-(--texto-mutado) opacity-60 animate-[girarLoaderInverso_4s_linear_infinite] z-0" />
            
            {/* Spinner Original */}
            <div className="absolute w-40 h-40 rounded-full border-4 border-(--borda) border-t-(--destaque) border-r-(--destaque) animate-[girarLoader_1.2s_cubic-bezier(0.68,-0.55,0.265,1.55)_infinite] z-10" />
            
            {/* Foto Central */}
            <div className="absolute w-32.5 h-32.5 rounded-full border-4 border-(--fundo-card) shadow-[0_0_20px_rgba(0,0,0,0.3)] z-20 overflow-hidden">
              <Image 
                src="/images/pedro.jpg" 
                alt="Carregando..." 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}