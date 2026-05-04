export interface TechnologyItem {
  filter: string;
  icon: string;
  label: string;
  labelKey?: string;
}

export interface TechnologyGroup {
  categoryKey: string;
  techs: TechnologyItem[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    categoryKey: "titulo-tech-group-frontend",
    techs: [
      { label: "JavaScript", icon: "devicon-javascript-plain", filter: "javascript" }
    ],
  },
  {
    categoryKey: "titulo-tech-group-backend",
    techs: [
      { label: "Node.js", icon: "devicon-nodejs-plain", filter: "nodejs" }
    ],
  },
  {
    categoryKey: "titulo-tech-group-ferramentas",
    techs: [
      { label: "Git", icon: "devicon-git-plain", filter: "git" }
    ],
  },
];

export function findTechnologyByFilter(filter: string) {
  for (const group of technologyGroups) {
    const tech = group.techs.find((item) => item.filter === filter);

    if (tech) {
      return tech;
    }
  }

  return null;
}
