export interface ProjectLink {
  href: string;
  icon: "github" | "youtube" | "instagram" | "tiktok" | "mail" | "star";
  label?: string;
  labelKey?: string;
  className: string;
  download?: boolean;
}

export interface ProjectTechGroup {
  titleKey: string;
  items: string[];
}

export interface ProjectSection {
  type: "content" | "links" | "download" | "tech";
  headingKey?: string;
  headingStyle?: "default" | "bordered" | "spaced";
  paragraphKeys?: string[];
  listKeys?: string[];
  videoSrc?: string;
  links?: ProjectLink[];
  titleKey?: string;
  descriptionKey?: string;
  href?: string;
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

const githubButtonClassName =
  "flex items-center gap-2 rounded-lg bg-[#24292e] px-4 py-2 font-semibold text-white transition-transform hover:-translate-y-1";
const youtubeButtonClassName =
  "flex items-center gap-2 rounded-lg bg-[#ff0000] px-4 py-2 font-semibold text-white transition-transform hover:-translate-y-1";
const instagramButtonClassName =
  "flex items-center gap-2 rounded-lg bg-[#e1306c] px-4 py-2 font-semibold text-white transition-transform hover:-translate-y-1";
const tiktokButtonClassName =
  "flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white transition-transform hover:-translate-y-1";
const mailButtonClassName =
  "flex items-center gap-2 rounded-lg bg-[#ea4335] px-4 py-2 font-semibold text-white transition-transform hover:-translate-y-1";
const demoButtonClassName =
  "flex items-center gap-2 rounded-lg bg-[#723AD3] px-4 py-2 font-semibold text-white transition-transform hover:-translate-y-1";

export const projects: ProjectDefinition[] = [
  {
    projectId: "laborwaze",
    titleKey: "titulo-laborwaze",
    summaryKey: "resumo-laborwaze",
    imageSrc: "/images/projects/laborwaze-project.png",
    iconSrc: "/images/icons/laborwaze-icon.png",
    techs: "",
    sections: [
      { type: "content", headingKey: "T1-laborwaze", paragraphKeys: ["P1-laborwaze", "P2-laborwaze"] },
      { type: "content", headingKey: "T2-laborwaze", paragraphKeys: ["P3-laborwaze", "P4-laborwaze"] },
      { type: "content", headingKey: "T3-laborwaze", paragraphKeys: ["P5-laborwaze"] },
      {
        type: "links",
        links: [
          { href: "https://www.youtube.com/@LaborWaze", icon: "youtube", label: "YouTube", className: youtubeButtonClassName },
          { href: "https://www.instagram.com/laborwaze/", icon: "instagram", label: "Instagram", className: instagramButtonClassName },
          { href: "https://www.tiktok.com/@laborwazecorp", icon: "tiktok", label: "TikTok", className: tiktokButtonClassName },
        ],
      },
      { type: "content", headingKey: "T4-laborwaze", headingStyle: "spaced", paragraphKeys: ["P6-laborwaze"] },
      {
        type: "links",
        links: [{ href: "mailto:laborwaze@gmail.com", icon: "mail", label: "Gmail", className: mailButtonClassName }],
      },
    ],
  },
  {
    projectId: "unipass",
    titleKey: "titulo-unipass",
    summaryKey: "resumo-unipass",
    imageSrc: "/images/projects/unipass-project.png",
    iconSrc: "/images/icons/unipass-icon.png",
    techs: "react nextjs typescript tailwindcss nestjs nodejs prisma postgresql git github iot",
    sections: [
      { type: "content", headingKey: "T1-unipass", paragraphKeys: ["P1-unipass"] },
      {
        type: "content",
        headingKey: "T2-unipass",
        paragraphKeys: ["P2-unipass"],
        listKeys: ["L1-unipass", "L2-unipass", "L3-unipass", "L4-unipass"],
      },
      { type: "content", headingKey: "T3-unipass", paragraphKeys: ["P3-unipass"] },
      {
        type: "tech",
        headingKey: "T4-unipass",
        fillLastRow: true,
        techGroups: [
          { titleKey: "frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { titleKey: "backend", items: ["NestJS", "Node.js", "Prisma"] },
          { titleKey: "banco-de-dados", items: ["PostgreSQL"] },
          { titleKey: "iot-dispositivos", items: ["ESP32", "RFID", "4G"] },
          { titleKey: "ferramentas", items: ["Git", "GitHub"] },
        ],
      },
    ],
  },
  {
    projectId: "portfolio-ecosystem",
    titleKey: "titulo-portfolio-eco",
    summaryKey: "resumo-portfolio-eco",
    imageSrc: "/images/projects/portfolio-ecosystem-project.png",
    iconSrc: "/images/icons/portfolio-ecosystem-icon.png",
    techs: "html5 css3 javascript react typescript nextjs tailwindcss git github",
    sections: [
      { type: "content", headingKey: "T1-portfolio-eco", paragraphKeys: ["P1-portfolio-eco"] },
      {
        type: "content",
        headingKey: "T2-portfolio-eco",
        paragraphKeys: ["P2-portfolio-eco"],
        listKeys: ["L1-portfolio-eco", "L2-portfolio-eco", "L3-portfolio-eco"],
      },
      {
        type: "content",
        headingKey: "T3-portfolio-eco",
        paragraphKeys: ["P3-portfolio-eco"],
        listKeys: ["L4-portfolio-eco", "L5-portfolio-eco", "L6-portfolio-eco"],
      },
      {
        type: "content",
        headingKey: "T4-portfolio-eco",
        paragraphKeys: ["P4-portfolio-eco"],
        listKeys: ["L7-portfolio-eco"],
      },
      {
        type: "links",
        links: [
          {
            href: "https://github.com/PedroRossZny/advanced-main-portfolio",
            icon: "github",
            labelKey: "github-repo-next",
            className: githubButtonClassName,
          },
          {
            href: "https://github.com/PedroRossZny/basic-main-portfolio",
            icon: "github",
            labelKey: "github-repo-vanilla",
            className: githubButtonClassName,
          },
          {
            href: "https://github.com/PedroRossZny/basic-base-portfolio",
            icon: "github",
            labelKey: "github-repo-template",
            className: githubButtonClassName,
          },
        ],
      },
      {
        type: "tech",
        headingKey: "T5-portfolio-eco",
        techGroups: [
          {
            titleKey: "frontend",
            items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "JavaScript"],
          },
          { titleKey: "ferramentas", items: ["Git", "GitHub"] },
        ],
      },
    ],
  },
  {
    projectId: "painel",
    titleKey: "titulo-painel",
    summaryKey: "resumo-painel",
    imageSrc: "/images/projects/painel-project.png",
    iconSrc: "/images/icons/painel-chamadas-icon.png",
    techs: "react nextjs typescript tailwindcss nestjs postgresql git github",
    sections: [
      {
        type: "content",
        headingKey: "T1-painel",
        paragraphKeys: ["P1-painel", "P2-painel", "P3-painel"],
        videoSrc: "https://www.youtube.com/embed/C7DnWuI7jQk?si=QTCqyZGk8PGquJ_d",
      },
      { type: "content", paragraphKeys: ["P4-painel", "P5-painel"] },
      {
        type: "download",
        titleKey: "download-painel",
        descriptionKey: "P6-painel",
        href: "/docs/documentacao-painel-chamadas.pdf",
        headingKey: "baixar-documentacao-painel",
      },
      { type: "content", headingKey: "T2-painel", paragraphKeys: ["P7-painel", "P8-painel"] },
      {
        type: "tech",
        headingKey: "T4-painel",
        descriptionKey: "P11-painel",
        techGroups: [
          { titleKey: "frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { titleKey: "backend", items: ["NestJS"] },
          { titleKey: "banco-de-dados", items: ["PostgreSQL"] },
          { titleKey: "ferramentas", items: ["Git", "GitHub"] },
        ],
      },
    ],
  },
  {
    projectId: "spacex",
    titleKey: "titulo-spacex",
    summaryKey: "resumo-spacex",
    imageSrc: "/images/projects/spacex-project.png",
    iconSrc: "/images/icons/space-icon.png",
    techs: "react reactnative expo javascript styledcomponents git github axios ecossistemareactnative",
    sections: [
      { type: "content", headingKey: "T1-spacex", paragraphKeys: ["P1-spacex", "P2-spacex", "P3-spacex", "P4-spacex"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/SpaceX-app", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "content", headingKey: "T2-spacex", headingStyle: "bordered", paragraphKeys: ["P5-spacex"], listKeys: ["L1-spacex", "L2-spacex", "L3-spacex", "L4-spacex", "L5-spacex", "L6-spacex", "L7-spacex"] },
      { type: "content", headingKey: "T3-spacex", headingStyle: "bordered", paragraphKeys: ["P6-spacex", "P7-spacex"] },
      { type: "content", headingKey: "T5-spacex", headingStyle: "bordered", paragraphKeys: ["P9-spacex", "P10-spacex"] },
      {
        type: "tech",
        headingKey: "T4-spacex",
        techGroups: [
          { titleKey: "frontend", items: ["React", "React Native", "Expo", "JavaScript", "Styled Components"] },
          { titleKey: "ferramentas", items: ["Git", "GitHub", "Expo Router", "React Native Reanimated", "Axios", "AsyncStorage"] },
        ],
      },
    ],
  },
  {
    projectId: "ambiente",
    titleKey: "titulo-ambiente",
    summaryKey: "resumo-ambiente",
    imageSrc: "/images/projects/sos-ambiente-project.png",
    iconSrc: "/images/icons/ambiente-icon.png",
    techs: "react reactnative expo javascript git github ecossistemareactnative",
    sections: [
      { type: "content", headingKey: "T1-ambiente", paragraphKeys: ["P1-ambiente", "P2-ambiente", "P3-ambiente"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/SOS-Ambiente", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "content", headingKey: "T2-ambiente", headingStyle: "bordered", paragraphKeys: ["P4-ambiente", "P5-ambiente"] },
      { type: "content", headingKey: "T3-ambiente", headingStyle: "bordered", paragraphKeys: ["P6-ambiente", "P7-ambiente"] },
      { type: "content", headingKey: "T4-ambiente", headingStyle: "bordered", paragraphKeys: ["P8-ambiente", "P9-ambiente"] },
      {
        type: "tech",
        headingKey: "T5-ambiente",
        techGroups: [
          { titleKey: "frontend", items: ["React", "React Native", "Expo", "JavaScript"] },
          { titleKey: "ferramentas", items: ["Git", "GitHub", "React Navigation", "Context API", "React Native Animated"] },
        ],
      },
    ],
  },
  {
    projectId: "coffee",
    titleKey: "titulo-coffee",
    summaryKey: "resumo-coffee",
    imageSrc: "/images/projects/smoke-coffee-project.png",
    iconSrc: "/images/icons/cafe-icon.png",
    techs: "react reactnative expo javascript git github ecossistemareactnative",
    sections: [
      { type: "content", headingKey: "T1-coffee", paragraphKeys: ["P1-coffee", "P2-coffee", "P3-coffee", "P4-coffee"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/SmokeCoffee", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "content", headingKey: "T2-coffee", headingStyle: "bordered", listKeys: ["L1-coffee", "L2-coffee", "L3-coffee", "L4-coffee", "L5-coffee", "L6-coffee", "L7-coffee", "L8-coffee"] },
      { type: "content", headingKey: "T3-coffee", headingStyle: "bordered", paragraphKeys: ["P5-coffee", "P6-coffee"] },
      {
        type: "tech",
        headingKey: "T4-coffee",
        techGroups: [
          { titleKey: "frontend", items: ["React", "React Native", "Expo", "JavaScript"] },
          { titleKey: "ferramentas", items: ["Git", "GitHub", "React Navigation", "AsyncStorage", "Expo Notifications"] },
        ],
      },
    ],
  },
  {
    projectId: "avalia-aqui",
    titleKey: "titulo-avalia-aqui",
    summaryKey: "resumo-avalia-aqui",
    imageSrc: "/images/projects/avalia-aqui-project.png",
    iconSrc: "/images/icons/avaliacao-icon.png",
    techs: "html5 css3 javascript nodejs express sqlite sequelize git github",
    sections: [
      {
        type: "content",
        headingKey: "T1-avalia-aqui",
        paragraphKeys: ["P1-avalia-aqui", "P2-avalia-aqui", "P3-avalia-aqui"],
        videoSrc: "https://www.youtube.com/embed/7NlSEaWKleI?si=xTorCE68Dj8ct8Ns",
      },
      { type: "content", headingKey: "T2-avalia-aqui", headingStyle: "bordered", paragraphKeys: ["P4-avalia-aqui", "P5-avalia-aqui"], listKeys: ["L1-avalia-aqui", "L2-avalia-aqui"] },
      { type: "content", headingKey: "T3-avalia-aqui", headingStyle: "bordered", paragraphKeys: ["P6-avalia-aqui"] },
      {
        type: "links",
        links: [
          { href: "https://avalia-aqui.vercel.app/", icon: "star", labelKey: "avalia-aqui-demo", className: demoButtonClassName },
          { href: "https://github.com/PedroRossZny/Site-Avaliacoes-Frontend", icon: "github", labelKey: "front-repo", className: githubButtonClassName },
          { href: "https://github.com/PedroRossZny/Site-Avaliacoes-Complete", icon: "github", labelKey: "full-repo", className: githubButtonClassName },
        ],
      },
      {
        type: "tech",
        headingKey: "T4-avalia-aqui",
        techGroups: [
          { titleKey: "frontend", items: ["HTML5", "CSS3", "JavaScript"] },
          { titleKey: "backend", items: ["Node.js", "Express.js"] },
          { titleKey: "banco-de-dados", items: ["SQLite", "Sequelize"] },
          { titleKey: "ferramentas", items: ["Git", "GitHub"] },
        ],
      },
    ],
  },
  {
    projectId: "portfolio",
    titleKey: "titulo-portfolio",
    summaryKey: "resumo-portfolio",
    imageSrc: "/images/projects/portfolio-project.png",
    iconSrc: "/images/icons/portfolio-project-icon.png",
    techs: "html5 css3 javascript git github",
    sections: [
      { type: "content", headingKey: "T1-portfolio", paragraphKeys: ["P1-portfolio", "P2-portfolio"] },
      { type: "content", headingKey: "T2-portfolio", paragraphKeys: ["P3-portfolio"], listKeys: ["L1-portfolio", "L2-portfolio", "L3-portfolio", "L4-portfolio"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/portfolio-project", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-portfolio", techGroups: [{ titleKey: "frontend", items: ["HTML5", "CSS3", "JavaScript"] }, { titleKey: "ferramentas", items: ["Git", "GitHub"] }] },
    ],
  },
  {
    projectId: "login",
    titleKey: "titulo-login",
    summaryKey: "resumo-login",
    imageSrc: "/images/projects/login-project.png",
    iconSrc: "/images/icons/login-icon.png",
    techs: "html5 css3 git github recursosui",
    sections: [
      { type: "content", headingKey: "T1-login", paragraphKeys: ["P1-login", "P2-login"] },
      { type: "content", headingKey: "T2-login", paragraphKeys: ["P3-login"], listKeys: ["L1-login", "L2-login", "L3-login", "L4-login"] },
      { type: "content", paragraphKeys: ["P4-login"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/login-project", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-login", techGroups: [{ titleKey: "frontend", items: ["HTML5", "CSS3"] }, { titleKey: "ferramentas", items: ["Git", "GitHub", "Material Icons"] }] },
    ],
  },
  {
    projectId: "social",
    titleKey: "titulo-social",
    summaryKey: "resumo-social",
    imageSrc: "/images/projects/social-project.png",
    iconSrc: "/images/icons/social-icon.png",
    techs: "html5 css3 git github",
    sections: [
      { type: "content", headingKey: "T1-social", paragraphKeys: ["P1-social", "P2-social"] },
      { type: "content", headingKey: "T2-social", paragraphKeys: ["P3-social"], listKeys: ["L1-social", "L2-social", "L3-social", "L4-social"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/social-project", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-social", techGroups: [{ titleKey: "frontend", items: ["HTML5", "CSS3"] }, { titleKey: "ferramentas", items: ["Git", "GitHub"] }] },
    ],
  },
  {
    projectId: "cordel",
    titleKey: "titulo-cordel",
    summaryKey: "resumo-cordel",
    imageSrc: "/images/projects/cordel-project.png",
    iconSrc: "/images/icons/cordel-icon.png",
    techs: "html5 css3 git github recursosui",
    sections: [
      { type: "content", headingKey: "T1-cordel", paragraphKeys: ["P1-cordel", "P2-cordel"] },
      { type: "content", headingKey: "T2-cordel", paragraphKeys: ["P3-cordel"], listKeys: ["L1-cordel", "L2-cordel", "L3-cordel", "L4-cordel"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/project-cordel", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-cordel", techGroups: [{ titleKey: "frontend", items: ["HTML5", "CSS3"] }, { titleKey: "ferramentas", items: ["Git", "GitHub", "Google Fonts"] }] },
    ],
  },
  {
    projectId: "android",
    titleKey: "titulo-android",
    summaryKey: "resumo-android",
    imageSrc: "/images/projects/android-project.png",
    iconSrc: "/images/icons/android-icon.png",
    techs: "html5 css3 git github",
    sections: [
      { type: "content", headingKey: "T1-android", paragraphKeys: ["P1-android", "P2-android"] },
      { type: "content", headingKey: "T2-android", paragraphKeys: ["P3-android"], listKeys: ["L1-android", "L2-android", "L3-android", "L4-android"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/project-android", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-android", techGroups: [{ titleKey: "frontend", items: ["HTML5", "CSS3"] }, { titleKey: "ferramentas", items: ["Git", "GitHub"] }] },
    ],
  },
  {
    projectId: "javascript",
    titleKey: "titulo-javascript",
    summaryKey: "resumo-javascript",
    imageSrc: "/images/projects/javascript-course-project.png",
    iconSrc: "/images/icons/javascript-icon.png",
    techs: "javascript",
    sections: [
      { type: "content", headingKey: "T1-javascript", paragraphKeys: ["P1-javascript", "P2-javascript"] },
      { type: "content", headingKey: "T2-javascript", paragraphKeys: ["P3-javascript"], listKeys: ["L1-javascript", "L2-javascript", "L3-javascript", "L4-javascript"] },
      {
        type: "links",
        links: [
          { href: "https://github.com/PedroRossZny/javascript-course", icon: "github", labelKey: "github-repo-1", className: githubButtonClassName },
          { href: "https://github.com/PedroRossZny/javascript-course-2", icon: "github", labelKey: "github-repo-2", className: githubButtonClassName },
        ],
      },
      { type: "tech", headingKey: "T3-javascript", techGroups: [{ titleKey: "linguagem", items: ["JavaScript"] }] },
    ],
  },
  {
    projectId: "python",
    titleKey: "titulo-python",
    summaryKey: "resumo-python",
    imageSrc: "/images/projects/python-course-project.png",
    iconSrc: "/images/icons/python-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-python", paragraphKeys: ["P1-python", "P2-python"] },
      { type: "content", headingKey: "T2-python", paragraphKeys: ["P3-python"], listKeys: ["L1-python", "L2-python", "L3-python", "L4-python"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/python-studies", icon: "github", labelKey: "repo-estudos", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-python", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
  {
    projectId: "html-css",
    titleKey: "titulo-html-css",
    summaryKey: "resumo-html-css",
    imageSrc: "/images/projects/html5-css3-course-project.png",
    iconSrc: "/images/icons/html-css-icon.png",
    techs: "html5 css3",
    sections: [
      { type: "content", headingKey: "T1-html-css", paragraphKeys: ["P1-html-css", "P2-html-css"] },
      { type: "content", headingKey: "T2-html-css", paragraphKeys: ["P3-html-css"], listKeys: ["L1-html-css", "L2-html-css", "L3-html-css", "L4-html-css", "L5-html-css"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/html-css", icon: "github", labelKey: "repo-estudos", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T3-html-css", techGroups: [{ titleKey: "linguagem", items: ["HTML5", "CSS3"] }] },
    ],
  },
  {
    projectId: "sorteador",
    titleKey: "titulo-sorteador",
    summaryKey: "resumo-sorteador",
    imageSrc: "/images/projects/sorteador-project.png",
    iconSrc: "/images/icons/sorteio-numeros-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-sorteador", paragraphKeys: ["P1-sorteador"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/Functions", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T2-sorteador", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
  {
    projectId: "gestao",
    titleKey: "titulo-gestao",
    summaryKey: "resumo-gestao",
    imageSrc: "/images/projects/gestao-jogadores-project.png",
    iconSrc: "/images/icons/jogador-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-gestao", paragraphKeys: ["P1-gestao"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/Use-of-Football-Players", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T2-gestao", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
  {
    projectId: "par-impar",
    titleKey: "titulo-par-impar",
    summaryKey: "resumo-par-impar",
    imageSrc: "/images/projects/par-impar-project.png",
    iconSrc: "/images/icons/par-impar-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-par-impar", paragraphKeys: ["P1-par-impar"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/Even-or-Odd", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T2-par-impar", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
  {
    projectId: "atm",
    titleKey: "titulo-atm",
    summaryKey: "resumo-atm",
    imageSrc: "/images/projects/atm-project.png",
    iconSrc: "/images/icons/atm-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-atm", paragraphKeys: ["P1-atm"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/ATM-Simulator", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T2-atm", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
  {
    projectId: "multa",
    titleKey: "titulo-multa",
    summaryKey: "resumo-multa",
    imageSrc: "/images/projects/multa-project.png",
    iconSrc: "/images/icons/multa-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-multa", paragraphKeys: ["P1-multa"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/Speeding-Fine-Calculation-Python", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T2-multa", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
  {
    projectId: "adivinha",
    titleKey: "titulo-adivinha",
    summaryKey: "resumo-adivinha",
    imageSrc: "/images/projects/adivinha-project.png",
    iconSrc: "/images/icons/adivinha-icon.png",
    techs: "python",
    sections: [
      { type: "content", headingKey: "T1-adivinha", paragraphKeys: ["P1-adivinha"] },
      {
        type: "links",
        links: [{ href: "https://github.com/PedroRossZny/Guessing-Game-Python", icon: "github", labelKey: "github-repo", className: githubButtonClassName }],
      },
      { type: "tech", headingKey: "T2-adivinha", techGroups: [{ titleKey: "linguagem", items: ["Python"] }] },
    ],
  },
];
