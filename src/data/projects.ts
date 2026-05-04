export interface ProjectTechGroup {
  titleKey: string;
  items: string[];
}

export interface ProjectSection {
  type: "content" | "tech";
  headingKey?: string;
  headingStyle?: "default" | "bordered" | "spaced";
  paragraphKeys?: string[];
  listKeys?: string[];
  descriptionKey?: string;
  techGroups?: ProjectTechGroup[];
  fillLastRow?: boolean;
}

export interface ProjectDefinition {
  projectId: string;
  titleKey: string;
  summaryKey: string;
  imageSrc: string;
  iconSrc: string;
  techs: string;
  sections: ProjectSection[];
}

export const projects: ProjectDefinition[] = [
  {
    projectId: "projeto1",
    titleKey: "titulo-projeto1",
    summaryKey: "resumo-projeto1",
    imageSrc: "/images/projects/base-project-image.png",
    iconSrc: "/images/icons/project-icon.png",
    techs: "javascript",
    sections: [
      { type: "content", headingKey: "T1-Projeto1", paragraphKeys: ["P1-Projeto1"] },
      {
        type: "tech",
        headingKey: "techs-used",
        fillLastRow: true,
        techGroups: [
          { titleKey: "frontend", items: ["JavaScript"] },
        ],
      },
    ],
  },
  {
    projectId: "projeto2",
    titleKey: "titulo-projeto2",
    summaryKey: "resumo-projeto2",
    imageSrc: "/images/projects/base-project-image.png",
    iconSrc: "/images/icons/project-icon.png",
    techs: "javascript nodejs",
    sections: [
      { type: "content", headingKey: "T1-Projeto2", paragraphKeys: ["P1-Projeto2"] },
      {
        type: "tech",
        headingKey: "techs-used",
        fillLastRow: true,
        techGroups: [
          { titleKey: "frontend", items: ["JavaScript"] },
          { titleKey: "backend", items: ["Node.js"] },
        ],
      },
    ],
  },
  {
    projectId: "projeto3",
    titleKey: "titulo-projeto3",
    summaryKey: "resumo-projeto3",
    imageSrc: "/images/projects/base-project-image.png",
    iconSrc: "/images/icons/project-icon.png",
    techs: "git",
    sections: [
      { type: "content", headingKey: "T1-Projeto3", paragraphKeys: ["P1-Projeto3"] },
      {
        type: "tech",
        headingKey: "techs-used",
        fillLastRow: true,
        techGroups: [
          { titleKey: "extras", items: ["Git"] },
        ],
      },
    ],
  },
];
