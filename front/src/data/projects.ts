export interface Project {
  id: string;
  title: string;
  status: 'Lanzado' | 'En Desarrollo' | 'Local';
  role: string;
  shortDescription: string;
  problem: string;
  solution: string;
  contribution: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  links: {
    enlace?: string;   // sitio en vivo
    demo?: string;  // YouTube walkthrough
    repo?: string;   // GitHub
  };
  images?: string[];
}

export const reducArProject: Project = {
  id: 'reducar',
  title: 'ReducAr',
  status: 'Lanzado',
  role: 'Líder Técnico y Arquitecto de Software',
  shortDescription: 'Plataforma centralizadora de cursos gratuitos de IT, eventos y orientación vocacional. Lideré un equipo de 10 personas para construir un ecosistema completo con sistema de usuarios y chatbot.',
  problem: 'El ecosistema de aprendizaje IT está fragmentado. Los principiantes no saben dónde buscar cursos gratuitos, eventos o empresas reales, lo que genera deserción y desorientación.',
  solution: 'Una aplicación web monolítica que centraliza recursos educativos, ofrece un test vocacional interactivo, visibiliza eventos del sector y conecta usuarios con empresas. Incluye sistema de autenticación (Google/GitHub), guardado de favoritos y un panel de administración.',
  contribution: [
    'Asumí el liderazgo técnico y la arquitectura del proyecto en la segunda semana, coordinando un equipo de 10 personas.',
    'Definí el stack y planifiqué el modelo de negocio y las vistas antes de iniciar el código.',
    'Diseñé e implementé un Chatbot con RAG (limitado a archivo local) para soporte, aislando el backend de inyecciones y asegurando la derivación a humanos.',
    'Establecí directrices de seguridad (Zero Trust) y validación estricta de datos.'
  ],
  techStack: {
    frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'Zod'],
    backend: ['Node.js', 'Express 5', 'TypeScript', 'MercadoPago'],
    database: ['Supabase (PostgreSQL)', 'Supabase Auth', 'Supabase Storage']
  },
  links: {
    enlace: 'https://reduc-ar.vercel.app/',
    demo: '',
    repo: 'https://github.com/ReducAR-dev/ReducAr'
  },
  images: []
};

export const codeCraftProject: Project = {
  id: 'codecraft',
  title: 'CodeCraft',
  status: 'En Desarrollo',
  role: 'Desarrollador Fullstack (Creador)',
  shortDescription: 'Marketplace que conecta clientes con profesionales IT, destacando por un innovador sistema de "scoping" guiado que ayuda a los clientes a estructurar y presupuestar sus proyectos sin saber de tecnología.',
  problem: 'Los clientes no técnicos no saben cómo redactar un brief o cuánto presupuestar, mientras que los desarrolladores juniors no encuentran oportunidades para obtener su primera experiencia laboral real.',
  solution: 'Una plataforma con un asistente interactivo que guía al cliente paso a paso para definir su proyecto, sugiriendo presupuestos y perfiles técnicos. Actúa como puente para nivelar la oferta y demanda del mercado IT, preparada para futuras integraciones de pagos en escrow.',
  contribution: [
    'Creé y arquitecté la plataforma completa desde cero (Frontend + Backend).',
    'Diseñé el flujo de "recorrido guiado" para reducir la fricción cognitiva de los clientes al publicar ofertas.',
    'Implementé la lógica de autenticación y base de datos utilizando el ecosistema de Firebase.',
    'Desarrollé validaciones estrictas y seguras de formularios con Zod y Express Validator.'
  ],
  techStack: {
    frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Zustand', 'Shadcn UI', 'Zod'],
    backend: ['Node.js', 'Express 5', 'TypeScript', 'Firebase Admin'],
    database: ['Firebase (Firestore)', 'Firebase Auth']
  },
  links: {
    enlace: '',
    demo: '',
    repo: 'https://github.com/Jonathan-Aguilera/CodeCraft'
  },
  images: ['video1.mp4']
};

export const puntoCriticoProject: Project = {
  id: 'punto-critico',
  title: 'Punto Crítico',
  status: 'Lanzado', // O 'En Desarrollo' si prefieres, pero está deployado
  role: 'Desarrollador Frontend y Especialista en Visualización',
  shortDescription: 'Visualización interactiva de datos abiertos sobre salud cardiovascular en Argentina. Un mapa 3D, filtros dinámicos y narrativas personales para explorar y comprender una problemática crítica de salud pública.',
  problem: 'La información sobre enfermedades cardiovasculares en Argentina está dispersa en múltiples bases de datos públicas y es difícil de interpretar para el público general. La falta de una narrativa visual y accesible impide comprender la magnitud real del problema y su evolución territorial y temporal.',
  solution: 'Una aplicación web frontend-only que combina un recorrido narrativo (test, historias, modelo 3D de corazón) con un mapa interactivo 3D de Argentina. Los usuarios pueden filtrar por provincia, año y tipo de enfermedad, y generar gráficos en tiempo real para descubrir patrones y disparidades regionales.',
  contribution: [
    'Desarrollé integralmente el frontend y la experiencia de usuario en un plazo de 1 mes.',
    'Implementé el mapa 3D interactivo con D3-Geo y React-Three-Fiber para la exploración geoespacial de datos.',
    'Creé animaciones fluidas y transiciones entre vistas con Motion para mantener el engagement.',
    'Diseñé un sistema de filtros dinámicos que actualiza los gráficos de Recharts en tiempo real.',
    'Transformé datasets complejos de fuentes públicas (INDEC, Datos Abiertos de Salud) en visualizaciones intuitivas y visualmente impactantes.'
  ],
  techStack: {
    frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router v8', 'Motion'],
    backend: ['Firebase (servicios de app)'],
    database: ['Datos abiertos públicos (INDEC, Ministerio de Salud)']
  },
  links: {
    enlace: 'https://punto-critico-eight.vercel.app/',
    demo: 'Video 1',
    repo: 'https://github.com/Jonathan-Aguilera/PuntoCritico'
  },
  images: ['video1.mp4', 'video2.mp4', 'video3.mp4']
};

export const projectsData: Project[] = [puntoCriticoProject, reducArProject, codeCraftProject];