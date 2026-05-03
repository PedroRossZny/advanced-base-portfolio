export interface TechnologyItem {
  filter: string;
  icon: string;
  label: string;
  labelKey?: string;
  iconType?: "class" | "custom";
}

export interface TechnologyGroup {
  categoryKey: string;
  techs: TechnologyItem[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    categoryKey: "titulo-tech-group-frontend",
    techs: [
      { label: "HTML5", icon: "devicon-html5-plain", filter: "html5" },
      { label: "CSS3", icon: "devicon-css3-plain", filter: "css3" },
      { label: "JavaScript", icon: "devicon-javascript-plain", filter: "javascript" },
      { label: "React", icon: "devicon-react-original", filter: "react" },
      { label: "Next.js", icon: "devicon-nextjs-plain", filter: "nextjs" },
      { label: "TypeScript", icon: "devicon-typescript-plain", filter: "typescript" },
      { label: "React Native", icon: "devicon-reactnative-original", filter: "reactnative" },
      { label: "Expo", icon: "devicon-expo-original", filter: "expo" },
      { label: "Tailwind CSS", icon: "devicon-tailwindcss-original", filter: "tailwindcss" },
    ],
  },
  {
    categoryKey: "titulo-tech-group-backend",
    techs: [
      { label: "Node.js", icon: "devicon-nodejs-plain", filter: "nodejs" },
      { label: "Python", icon: "devicon-python-plain", filter: "python" },
      { label: "NestJS", icon: "devicon-nestjs-original", filter: "nestjs" },
      { label: "Express.js", icon: "devicon-express-original", filter: "express" },
      { label: "PostgreSQL", icon: "devicon-postgresql-plain", filter: "postgresql" },
      { label: "Prisma", icon: "devicon-prisma-original", filter: "prisma" },
      { label: "SQLite", icon: "devicon-sqlite-plain", filter: "sqlite" },
      { label: "Sequelize", icon: "devicon-sequelize-plain", filter: "sequelize" },
    ],
  },
  {
    categoryKey: "titulo-tech-group-ferramentas",
    techs: [
      { label: "Git", icon: "devicon-git-plain", filter: "git" },
      { label: "GitHub", icon: "devicon-github-original", filter: "github" },
      { label: "Styled Components", icon: "devicon-styledcomponents-plain", filter: "styledcomponents" },
      {
        label: "Mobile Core",
        labelKey: "mobile-core",
        icon: "devicon-reactnavigation-original",
        filter: "ecossistemareactnative",
      },
      { label: "Axios", icon: "devicon-axios-plain", filter: "axios" },
      { label: "UI Libs", labelKey: "ui-libs", icon: "devicon-materialui-plain", filter: "recursosui" },
      { label: "IoT", icon: "iot", iconType: "custom", filter: "iot" },
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
