// data/skills.ts
import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    sector: 'frontend',
    title: 'Frontend',
    description: 'Capacidad para construir interfaces funcionales y modernas, con foco en la experiencia de usuario.',
    items: [
      {
        name: 'React & TypeScript',
        category: 'primary',
        context: 'Stack principal en todos mis proyectos personales y de equipo.',
        projects: ['ReducAr', 'CodeCraft', 'Punto Crítico', 'Portafolio']
      },
      {
        name: 'Tailwind CSS & Shadcn/UI',
        category: 'primary',
        context: 'Estilizado rápido y modular de aplicaciones.',
        projects: ['CodeCraft', 'Portafolio']
      },
      {
        name: 'Visualización de Datos (Recharts, D3.js)',
        category: 'primary',
        context: 'Creación de gráficos interactivos y mapas 3D.',
        projects: ['Punto Crítico']
      },
      {
        name: 'Next.js',
        category: 'exploring'
      },
      {
        name: 'React Native',
        category: 'exploring'
      },
      {
        name: 'Testing (Vitest)',
        category: 'exploring'
      },
      {
        name: 'Migrar visualizaciones de D3.js a librerías más ligeras para mejorar performance.',
        category: 'next-step'
      }
    ]
  },
  {
    sector: 'backend',
    title: 'Backend & Bases de Datos',
    description: 'Mi área de mayor fortaleza, con formación académica especializada y experiencia en arquitectura de sistemas.',
    items: [
      {
        name: 'Node.js & Express',
        category: 'primary',
        context: 'Desarrollo de APIs con liderazgo técnico.',
        projects: ['ReducAr', 'CodeCraft']
      },
      {
        name: 'Bases de Datos Relacionales (SQL)',
        category: 'primary',
        context: 'Diseño y programación en Diplomado de Iplacex (216 hrs) y aplicación en Municipalidad de Arica para digitalización de archivos.',
        projects: ['Municipalidad de Arica']
      },
      {
        name: 'PostgreSQL / Supabase',
        category: 'primary',
        context: 'Implementación de autenticación, almacenamiento y base de datos en tiempo real.',
        projects: ['ReducAr']
      },
      {
        name: 'Firebase (Firestore & Auth)',
        category: 'primary',
        context: 'Backend completo incluyendo sistema de usuarios y validaciones.',
        projects: ['CodeCraft']
      },
      {
        name: 'Go',
        category: 'exploring'
      },
      {
        name: 'Docker',
        category: 'exploring'
      },
      {
        name: 'Redis',
        category: 'exploring'
      },
      {
        name: 'Evaluar migración de Node.js a Go para servicios de alta concurrencia.',
        category: 'next-step'
      }
    ]
  },
  {
    sector: 'architecture',
    title: 'Arquitectura & DevOps',
    description: 'Conocimientos de ingeniería de software para construir sistemas mantenibles y escalables.',
    items: [
      {
        name: 'Diseño de Arquitectura (Monolito, Zero Trust)',
        category: 'primary',
        context: 'Definición de la arquitectura monolítica y directrices de seguridad desde el diseño.',
        projects: ['ReducAr']
      },
      {
        name: 'Validación de Datos (Zod, Express Validator)',
        category: 'primary',
        context: 'Implementación de esquemas de validación estricta en backends.',
        projects: ['ReducAr', 'CodeCraft']
      },
      {
        name: 'CI/CD (GitHub Actions)',
        category: 'exploring'
      },
      {
        name: 'Testing automatizado',
        category: 'exploring'
      }
    ]
  },
  {
    sector: 'soft-skills',
    title: 'Competencias Transversales',
    description: 'Competencias interpersonales demostradas en entornos técnicos y de alta presión.',
    items: [
      {
        name: 'Liderazgo Técnico',
        category: 'competency',
        context: 'Coordiné un equipo de 10 personas en ReducAr, definiendo stack, responsabilidades y plazos.'
      },
      {
        name: 'Resolución bajo Presión',
        category: 'competency',
        context: 'Gestión de imprevistos técnicos en vivo como sonidista principal en eventos masivos y cobertura de horas pico en entornos de alta demanda.'
      },
      {
        name: 'Autonomía y Autoaprendizaje',
        category: 'competency',
        context: 'Aprendizaje autodidacta de inglés técnico y uso de IA como herramienta para planificar y delegar tareas, acelerando mis tiempos de desarrollo.'
      },
      {
        name: 'Comunicación Técnica',
        category: 'competency',
        context: 'Capacidad para explicar conceptos complejos de forma simple, demostrado en la mentoría a compañeros y en la filosofía "Todos por igual".'
      }
    ]
  }
];