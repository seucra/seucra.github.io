export interface Project {
  slug: string;

  title: string;

  tagline: string;

  summary: string;

  status:
    | "active"
    | "completed"
    | "paused"
    | "archived";

  category:
    | "product"
    | "library"
    | "research"
    | "experiment";

  role: string;

  technologies: string[];

  repository?: string;

  live?: string;

  started: string;

  updated: string;
}
