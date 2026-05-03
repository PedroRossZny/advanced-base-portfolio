"use client";

import { useState } from "react";
import EducationSection from "@/components/EducationSection";
import ProfileCard from "@/components/ProfileCard";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import { useLanguage } from "@/components/LanguageProvider";
import { findTechnologyByFilter } from "@/data/technologies";

export default function Home() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("");
  const activeTechnology = findTechnologyByFilter(activeFilter);
  const filterName = activeTechnology
    ? activeTechnology.labelKey
      ? t(activeTechnology.labelKey)
      : activeTechnology.label
    : "";

  const handleFilter = (code: string) => {
    if (activeFilter === code) {
      setActiveFilter("");
      return;
    }

    setActiveFilter(code);

    setTimeout(() => {
      const projectsElement = document.getElementById("projetos");
      const detailsElement = document.getElementById("detalhes");

      if (!projectsElement) {
        return;
      }

      if (window.innerWidth <= 1024) {
        const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
        const top = projectsElement.getBoundingClientRect().top + window.scrollY - headerHeight - 30;

        window.scrollTo({ top, behavior: "smooth" });
        return;
      }

      if (detailsElement) {
        detailsElement.scrollTo({ top: projectsElement.offsetTop - 50, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <main className="mx-auto grid w-[98%] max-w-375 grid-cols-1 gap-8 p-4 lg:h-full lg:min-h-0 lg:grid-cols-[320px_1fr] lg:overflow-hidden lg:px-0 lg:py-2.5">
      <ProfileCard />

      <section id="detalhes" className="min-h-0 scroll-smooth pb-10 pr-0 md:overflow-y-auto md:pr-4">
        <TechSection activeFilter={activeFilter} onFilterSelect={handleFilter} />
        <ProjectsSection
          activeFilter={activeFilter}
          filterName={filterName}
          onClearFilter={() => setActiveFilter("")}
        />
        <EducationSection />
      </section>
    </main>
  );
}
