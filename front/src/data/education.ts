import type { Certificate } from '../types';

export const certificatesData: Certificate[] = [
  // ==========================================
  // NIVEL 1: Lo más importante (El Título)
  // ==========================================
  {
    id: 'cert-titulo-iplacex',
    title: 'Técnico en Desarrollo de Aplicaciones Multiplataforma',
    issuer: 'Iplacex',
    year: '2024',
    imageUrl: '/certificates/Certificado-titulo.webp',
    codigoValidacion: '6571857376699916032',
    credentialUrl: 'https://portalestudiante.iplacex.cl/validar/certificado',
    level: 1,
    category: 'Título Técnico'
  },

  // ==========================================
  // NIVEL 2: Certificaciones de EducacionIT
  // ==========================================
  {
    id: 'cert-mongodb',
    title: 'MongoDB',
    issuer: 'EducacionIT',
    year: '2026',
    level: 2,
    category: 'Base de Datos'
  },
  {
    id: 'cert-reactjsDeveloper',
    title: 'React.JS Developer',
    issuer: 'EducacionIT',
    year: '2026',
    level: 2,
    category: 'Frontend'
  },
  {
    id: 'cert-patronesDiseno',
    title: 'Patrones de Diseño',
    issuer: 'EducacionIT',
    year: '2026',
    level: 2,
    category: 'Arquitectura de Software'
  },
  {
    id: 'cert-git',
    title: 'Git: Desarrollo Colaborativo',
    issuer: 'EducacionIT',
    year: '2026',
    level: 2,
    category: 'Herramientas'
  },
  {
    id: 'cert-iaProgramadores',
    title: 'IA aplicada al desarrollo - POO con IA - Inmersión IA en la práctica',
    issuer: 'EducacionIT, Daxus',
    year: '2026',
    level: 2,
    category: 'Inteligencia Artificial'
  },
];