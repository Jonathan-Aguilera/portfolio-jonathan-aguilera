export interface SkillCategory {
  category: string;
  description: string; // Una breve frase que explique el enfoque de esta categoría
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Avanzado' | 'Intermedio' | 'Básico' | 'En aprendizaje';
  context: string; // Evidencia: dónde y cómo la has aplicado
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend & Bases de Datos',
    description: 'Mi área de mayor fortaleza, con formación académica especializada y experiencia en arquitectura de sistemas.',
    skills: [
      {
        name: 'Node.js & Express',
        level: 'Intermedio',
        context: 'Desarrollo de APIs para ReducAr (liderazgo técnico) y CodeCraft (proyecto propio).'
      },
      {
        name: 'Bases de Datos Relacionales (SQL)',
        level: 'Intermedio',
        context: 'Diseño y programación en el Diplomado de Iplacex (216 hrs) y aplicación en la Municipalidad de Arica para digitalización de archivos.'
      },
      {
        name: 'PostgreSQL / Supabase',
        level: 'Intermedio',
        context: 'Implementación de autenticación, almacenamiento y base de datos en tiempo real para ReducAr.'
      },
      {
        name: 'Firebase (Firestore & Auth)',
        level: 'Intermedio',
        context: 'Backend completo para CodeCraft, incluyendo sistema de usuarios y validaciones.'
      }
    ]
  },
  {
    category: 'Frontend',
    description: 'Capacidad para construir interfaces funcionales y modernas, con foco en la experiencia de usuario.',
    skills: [
      {
        name: 'React & TypeScript',
        level: 'Avanzado',
        context: 'Stack principal en todos mis proyectos personales y de equipo (ReducAr, CodeCraft, Punto Crítico).'
      },
      {
        name: 'Tailwind CSS & Shadcn/UI',
        level: 'Intermedio',
        context: 'Estilizado rápido y modular de aplicaciones como CodeCraft y el portafolio personal.'
      },
      {
        name: 'Visualización de Datos (Recharts, D3.js)',
        level: 'Básico',
        context: 'Creación de gráficos interactivos y mapas 3D para el proyecto Punto Crítico.'
      }
    ]
  },
  {
    category: 'Arquitectura, Metodologías y DevOps',
    description: 'Conocimientos de ingeniería de software para construir sistemas mantenibles y escalables.',
    skills: [
      {
        name: 'Integración Continua (CI/CD)',
        level: 'Básico',
        context: 'Formación a través del Diplomado en Integración Continua (126 hrs) de Iplacex.'
      },
      {
        name: 'Diseño de Arquitectura (Monolito, Zero Trust)',
        level: 'Intermedio',
        context: 'Aplicado en ReducAr: definición de la arquitectura monolítica y directrices de seguridad desde el diseño.'
      },
      {
        name: 'Validación de Datos (Zod, Express Validator)',
        level: 'Intermedio',
        context: 'Implementación de esquemas de validación estricta en los backends de ReducAr y CodeCraft.'
      }
    ]
  },
  {
    category: 'Habilidades Blandas & Liderazgo',
    description: 'Competencias interpersonales demostradas en entornos técnicos y de alta presión.',
    skills: [
      {
        name: 'Liderazgo Técnico y Coordinación',
        level: 'Intermedio',
        context: 'Asumí el liderazgo técnico de un equipo de 10 personas en ReducAr, coordinando el stack, las responsabilidades y los plazos.'
      },
      {
        name: 'Resolución de Problemas bajo Presión',
        level: 'Avanzado',
        context: 'Gestión de imprevistos técnicos en vivo como sonidista principal en eventos masivos y cobertura de horas pico en entornos de alta demanda.'
      },
      {
        name: 'Autonomía y Autoaprendizaje',
        level: 'Avanzado',
        context: 'Aprendizaje autodidacta de inglés técnico y uso de IA como herramienta para planificar y delegar tareas, acelerando mis tiempos de desarrollo.'
      },
      {
        name: 'Comunicación Técnica',
        level: 'Intermedio',
        context: 'Capacidad para explicar conceptos complejos de forma simple, demostrado en la mentoría a compañeros y en la filosofía "Todos por igual".'
      }
    ]
  }
];