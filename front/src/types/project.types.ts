export type ProjectStatus = 'Lanzado' | 'En Desarrollo' | 'Local';

export interface ProjectLinks {
  /** Sitio en vivo */
  enlace?: string;
  /** YouTube walkthrough */
  demo?: string;
  /** GitHub */
  repo?: string;
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  database: string[];
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  role: string;
  shortDescription: string;
  problem: string;
  solution: string;
  contribution: string[];
  techStack: ProjectTechStack;
  links: ProjectLinks;
  images?: string[];
}