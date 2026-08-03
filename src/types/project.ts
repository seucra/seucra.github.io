export type ProjectStatus =
  | "active"
  | "completed"
  | "paused"
  | "archived";

export type ProjectCategory =
  | "product"
  | "library"
  | "research"
  | "experiment";

export interface Project {

  slug: string;

  title: string;

  tagline: string;

  summary: string;

  role: string;

  category: ProjectCategory;

  status: ProjectStatus;

  technologies: string[];

  repository?: string;

  live?: string;

  started: string;

  updated: string;

  featured?: boolean;

}
