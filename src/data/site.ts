export const themeColors = {
  dark: "#100c18",
  light: "#f6f4fb",
} as const;

export const site = {
  name: "James O'Sullivan",
  title: "James O'Sullivan, Full-stack Developer",
  description:
    "James O'Sullivan is a full-stack TypeScript developer who builds and ships production apps with Next.js, React and Postgres.",
  url: "https://jaos-dev.github.io/portfolio-react",
  basePath: "/portfolio-react",
  github: "https://github.com/JAOS-DEV",
  linkedin: "https://www.linkedin.com/in/james-o-sullivan-891779210/",
  /**
   * TODO: set a public contact address. Do not commit a personal Gmail.
   */
  contactEmail: null as string | null,
} as const;
