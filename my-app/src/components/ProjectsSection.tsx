"use client";

import { Mail, Wrench } from "lucide-react";
import { FaFilePdf, FaGithub, FaInstagram, FaStar, FaTiktok, FaYoutube } from "react-icons/fa6";
import { useLanguage } from "@/components/LanguageProvider";
import { projects, type ProjectLink, type ProjectSection } from "@/data/projects";
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

function ProjectLinkIcon({ icon }: Pick<ProjectLink, "icon">) {
  switch (icon) {
    case "youtube":
      return <FaYoutube size={18} />;
    case "instagram":
      return <FaInstagram size={18} />;
    case "tiktok":
      return <FaTiktok size={18} />;
    case "mail":
      return <Mail size={18} />;
    case "star":
      return <FaStar size={18} />;
    case "github":
    default:
      return <FaGithub size={18} />;
  }
}

export default function ProjectsSection({
  activeFilter,
  filterName,
  onClearFilter,
}: ProjectsSectionProps) {
  const { t } = useLanguage();
  const html = (key: string) => ({ __html: t(key) });

  const renderContentSection = (section: ProjectSection, projectTitle: string) => {
    const hasMedia = Boolean(section.videoSrc);

    return (
      <section className="mb-6" key={`${projectTitle}-${section.headingKey ?? "content"}`}>
        {section.headingKey ? (
          <h4 className={getHeadingClassName(section.headingStyle)}>{t(section.headingKey)}</h4>
        ) : null}

        {hasMedia ? (
          <div className="block">
            <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-(--borda) shadow-lg lg:float-right lg:mb-4 lg:ml-6 lg:w-105">
              <iframe
                className="h-full w-full"
                src={section.videoSrc}
                title={projectTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {section.paragraphKeys?.map((key) => (
              <p
                key={key}
                className="mb-2.5 leading-relaxed"
                dangerouslySetInnerHTML={html(key)}
              />
            ))}

            {section.listKeys ? (
              <ul className="mb-2.5 ml-6 list-disc space-y-1 text-(--texto) leading-relaxed">
                {section.listKeys.map((key) => (
                  <li key={key} dangerouslySetInnerHTML={html(key)} />
                ))}
              </ul>
            ) : null}

            <div className="clear-both" />
          </div>
        ) : (
          <>
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
          </>
        )}
      </section>
    );
  };

  const renderLinksSection = (section: ProjectSection, projectTitle: string) => (
    <div className="my-4 flex flex-wrap gap-3" key={`${projectTitle}-links-${section.links?.[0]?.href ?? "group"}`}>
      {section.links?.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          download={link.download}
          className={link.className}
        >
          <ProjectLinkIcon icon={link.icon} /> {link.labelKey ? t(link.labelKey) : link.label}
        </a>
      ))}
    </div>
  );

  const renderDownloadSection = (section: ProjectSection, projectTitle: string) => (
    <div
      className="my-8 flex flex-col items-center gap-5 rounded-xl border border-(--borda) bg-(--fundo-card) p-5 sm:flex-row"
      key={`${projectTitle}-download`}
    >
      <div className="shrink-0 text-4xl text-red-500">
        <FaFilePdf />
      </div>
      <div className="text-center sm:text-left">
        <p className="mb-1 font-semibold text-(--texto)">{t(section.titleKey ?? "")}</p>
        <p className="mb-3 text-sm text-(--texto-mutado)">{t(section.descriptionKey ?? "")}</p>
        <a
          href={section.href}
          download
          className="inline-block rounded-lg bg-[#1e66ff] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
        >
          {t(section.headingKey ?? "")}
        </a>
      </div>
    </div>
  );

  const renderTechSection = (section: ProjectSection, projectTitle: string) => (
    <section className="mb-6" key={`${projectTitle}-${section.headingKey ?? "tech"}`}>
      <h4 className={getHeadingClassName("bordered")}>{t(section.headingKey ?? "")}</h4>

      {section.descriptionKey ? <p className="mb-4 leading-relaxed">{t(section.descriptionKey)}</p> : null}

      <div
        className={[
          technologyGridClassName,
          section.fillLastRow ? "[&>*:last-child]:col-span-full" : "",
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
    switch (section.type) {
      case "links":
        return renderLinksSection(section, projectTitle);
      case "download":
        return renderDownloadSection(section, projectTitle);
      case "tech":
        return renderTechSection(section, projectTitle);
      case "content":
      default:
        return renderContentSection(section, projectTitle);
    }
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
