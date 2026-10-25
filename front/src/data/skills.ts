export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'APIs REST']
  },
  {
    category: 'Bases de Datos',
    skills: ['PostgreSQL', 'Supabase', 'Firebase']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'Vite', 'ESLint']
  }
];
