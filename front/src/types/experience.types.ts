export type ExperienceType =
  | 'Fullstack'
  | 'Técnico'
  | 'Logística'
  | 'Atención al Público'
  | 'Práctica';

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  /** Formato: "Mes Año - Mes Año" */
  date: string;
  /** Categoría para filtrar a futuro */
  type: ExperienceType;
  description: string;
  /** Bullet points con impacto */
  achievements: string[];
  /** Solo si aplica */
  technologies?: string[];
}