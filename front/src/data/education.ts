export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  imageUrl: string; 
  credentialUrl?: string; 
  level: 1 | 2 | 3; // 1: Título/Base, 2: IT Complementario, 3: Otras áreas
  category: string; 
}

export const certificatesData: Certificate[] = [
  // ==========================================
  // NIVEL 1: Lo más importante (El Título)
  // ==========================================
  {
    id: 'cert-titulo-iplacex',
    title: 'Técnico en Desarrollo de Aplicaciones Multiplataforma',
    issuer: 'Iplacex',
    year: '2024',
    imageUrl: '/assets/certs/titulo-iplacex.jpg',
    credentialUrl: 'https://portalestudiante.iplacex.cl/validar/certificado', // Pon el código de validación si quieres
    level: 1,
    category: 'Título Técnico'
  },
  // NOTA: Aquí iría también la Beca de Fundación Pescar cuando tengas la imagen.

  // ==========================================
  // NIVEL 2: Los Diplomados de Iplacex y Cursos IT
  // ==========================================
  {
    id: 'cert-dip-bd',
    title: 'Diplomado en Diseño y Programación de Bases de Datos',
    issuer: 'Iplacex',
    year: '2022',
    imageUrl: '/assets/certs/dip-bd.jpg',
    level: 2,
    category: 'Backend / DB'
  },
  {
    id: 'cert-dip-oop',
    title: 'Diplomado en Programación Orientada a Objetos',
    issuer: 'Iplacex',
    year: '2022',
    imageUrl: '/assets/certs/dip-oop.jpg',
    level: 2,
    category: 'Backend'
  },
  {
    id: 'cert-dip-front',
    title: 'Diplomado en Programación Front End',
    issuer: 'Iplacex',
    year: '2023',
    imageUrl: '/assets/certs/dip-front.jpg',
    level: 2,
    category: 'Frontend'
  },
  {
    id: 'cert-dip-web',
    title: 'Diplomado en Programación Web',
    issuer: 'Iplacex',
    year: '2023',
    imageUrl: '/assets/certs/dip-web.jpg',
    level: 2,
    category: 'Fullstack'
  },
  {
    id: 'cert-dip-multi',
    title: 'Diplomado en Programación Multiplataforma',
    issuer: 'Iplacex',
    year: '2023',
    imageUrl: '/assets/certs/dip-multi.jpg',
    level: 2,
    category: 'Desarrollo Móvil'
  },
  {
    id: 'cert-dip-avan',
    title: 'Diplomado en Programación Avanzada',
    issuer: 'Iplacex',
    year: '2023',
    imageUrl: '/assets/certs/dip-avanzada.jpg',
    level: 2,
    category: 'Backend'
  },
  {
    id: 'cert-dip-ci',
    title: 'Diplomado en Integración Continua',
    issuer: 'Iplacex',
    year: '2024',
    imageUrl: '/assets/certs/dip-ci.jpg',
    level: 2,
    category: 'DevOps / CI-CD'
  },
  {
    id: 'cert-python',
    title: 'Introducción a Python',
    issuer: 'EducacionIT',
    year: '2026',
    imageUrl: '/assets/certs/python-eduit.jpg',
    level: 2,
    category: 'Backend'
  },

  // ==========================================
  // NIVEL 3: Otras áreas (Revelación progresiva)
  // ==========================================
  {
    id: 'cert-premio-bicentenario',
    title: 'Premio Bicentenario',
    issuer: 'Liceo Bicentenario Jovina Naranjo Fernández',
    year: '2021',
    imageUrl: '/assets/certs/premio-bicentenario.jpg',
    level: 3,
    category: 'Reconocimiento General'
  },
  {
    id: 'cert-distincion-autonomia',
    title: 'Distinción Destacada: Autonomía',
    issuer: 'Liceo Bicentenario Jovina Naranjo Fernández',
    year: '2017',
    imageUrl: '/assets/certs/distincion-autonomia.jpg',
    level: 3,
    category: 'Reconocimiento General'
  }
];