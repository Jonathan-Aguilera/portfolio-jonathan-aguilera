export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export const educationList: Education[] = [
  {
    id: 'iplacex',
    institution: 'IPLACEX',
    degree: 'Técnico en Desarrollo de Aplicaciones Multiplataforma (Egresado)',
    period: '2023'
  },
  {
    id: 'pescar',
    institution: 'Fundación Pescar · JP Morgan · Finnegans · Educación IT',
    degree: 'Desarrollo Web Full Stack',
    period: 'En curso'
  },
  {
    id: 'santander',
    institution: 'Santander Open Academy',
    degree: 'Fundamentos de Ciberseguridad, Ciencia de Datos',
    period: 'En curso'
  }
];
