export type SkillCategory = {
  sector: 'frontend' | 'backend' | 'architecture' | 'soft-skills';
  title: string;
  description: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  category: 'primary' | 'exploring' | 'next-step' | 'competency';
  context?: string;
  projects?: string[];
};