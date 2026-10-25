export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'reducar',
    title: 'ReducAr',
    description: 'Plataforma educativa que reúne ofertas de estudios gratuitos en IT. MVP con pasarela de pagos, chatbot y control de acceso por políticas.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express']
  },
  {
    id: 'codecraft',
    title: 'CodeCraft',
    description: 'Bolsa IT con curva de aprendizaje adaptativa al usuario. Beta lanzada y en evolución continua.',
    tags: ['React', 'TypeScript', 'Tailwind CSS']
  }
];
