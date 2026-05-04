"use client";

import { Wrench } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { projects, type ProjectSection } from "@/data/projects";
import ProjectCard, { ProjectCardsProvider } from "./ProjectCard";

interface ProjectsSectionProps {
  activeFilter: string;
  filterName: string;
  onClearFilter: () => void;
}

const technologyGridClassName = "grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))]";

function getHeadingClassName(style?: ProjectSection["headingStyle"]) {
  const baseClassName = "mb-2.5 text-lg font-poppins font-semibold text-[var(--destaque)]";

  if (style === "bordered") {
    return `${baseClassName} border-t border-[var(--borda)] pt-4`;
  }

  if (style === "spaced") {
    return `${baseClassName} mt-6`;
  }

  return baseClassName;
}

export default function ProjectsSection({
  activeFilter,
  filterName,
  onClearFilter,
}: ProjectsSectionProps) {
  const { t } = useLanguage();
  const html = (key: string) => ({ __html: t(key) });

  const renderContentSection = (section: ProjectSection, projectTitle: string) => (
    <section className="mb-6" key={`${projectTitle}-${section.headingKey ?? "content"}`}>
      {section.headingKey ? (
        <h4 className={getHeadingClassName(section.headingStyle)}>{t(section.headingKey)}</h4>
      ) : null}

      {section.paragraphKeys?.map((key) => (
        <p
          key={key}
          className="mb-2.5 leading-relaxed"
          dangerouslySetInnerHTML={html(key)}
        />
      ))}

      {section.listKeys ? (
        <ul className="ml-6 list-disc space-y-1 text-(--texto) leading-relaxed">
          {section.listKeys.map((key) => (
            <li key={key} dangerouslySetInnerHTML={html(key)} />
          ))}
        </ul>
      ) : null}
    </section>
  );

  const renderTechSection = (section: ProjectSection, projectTitle: string) => (
    <section className="mb-6" key={`${projectTitle}-${section.headingKey ?? "tech"}`}>
      <h4 className={getHeadingClassName("bordered")}>{t(section.headingKey ?? "")}</h4>

      {section.descriptionKey ? <p className="mb-4 leading-relaxed">{t(section.descriptionKey)}</p> : null}

      <div
        className={[
          technologyGridClassName,
          section.fillLastRow && (section.techGroups?.length ?? 0) % 2 === 1
            ? "[&>*:last-child]:col-span-full"
            : "",
        ].join(" ")}
      >
        {section.techGroups?.map((group) => (
          <div
            key={`${projectTitle}-${group.titleKey}`}
            className="rounded-lg border border-(--borda) bg-(--fundo-card) p-3"
          >
            <h5 className="mb-2 text-sm font-semibold text-(--texto)">{t(group.titleKey)}</h5>
            <ul className="m-0 list-none space-y-1 p-0 text-sm text-(--texto-mutado)">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

  const renderSection = (section: ProjectSection, projectTitle: string) => {
    if (section.type === "tech") {
      return renderTechSection(section, projectTitle);
    }

    return renderContentSection(section, projectTitle);
  };

  return (
    <article
      id="projetos"
      className="mb-10 min-h-100 rounded-xl border border-(--borda) bg-(--fundo-card) p-6 transition-colors duration-400"
    >
      <header className="mb-6 flex items-center justify-between border-b-2 border-(--borda) pb-3">
        <div className="flex items-center gap-2 text-(--destaque)">
          <Wrench size={24} />
          <h2 className="text-xl font-poppins font-semibold uppercase tracking-wide">
            {t("titulo-projetos")}
          </h2>
          <span className="ml-2 text-sm font-normal text-(--texto-mutado)">
            {filterName ? `- ${filterName}` : ""}
          </span>
        </div>

        {activeFilter ? (
          <button
            type="button"
            onClick={onClearFilter}
            className="cursor-pointer font-semibold text-(--texto-mutado) transition-all hover:scale-110 hover:text-red-500 active:scale-95"
          >
            {t("limpar-filtro")}
          </button>
        ) : null}
      </header>

      <ProjectCardsProvider>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const title = t(project.titleKey);

            return (
              <ProjectCard
                key={project.projectId}
                projectId={project.projectId}
                title={title}
                activeFilter={activeFilter}
                summary={t(project.summaryKey)}
                imageSrc={project.imageSrc}
                iconSrc={project.iconSrc}
                techs={project.techs}
              >
                {project.sections.map((section) => renderSection(section, title))}
              </ProjectCard>
            );
          })}
        </div>
      </ProjectCardsProvider>
    </article>
  );
}
