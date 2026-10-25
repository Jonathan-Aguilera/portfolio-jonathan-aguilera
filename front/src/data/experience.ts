export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'reducar-coord',
    role: 'Coordinador Técnico',
    company: 'ReducAr',
    period: '2023 - Presente',
    description: 'Coordinación de un equipo de 10 personas en el desarrollo de la plataforma educativa.',
    bullets: [
      'Liderazgo en el diseño y despliegue del MVP.',
      'Implementación de pasarela de pagos y chatbot.',
      'Establecimiento de políticas de acceso y roles de usuario.'
    ]
  }
];
