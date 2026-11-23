import type { Experience } from '../types';

export const experiencesData: Experience[] = [
  {
    id: 'exp-punto-saludable',
    role: 'Repositor y Encargado de Depósito',
    company: 'Punto Saludable',
    location: 'Buenos Aires, Argentina',
    date: 'Nov 2025 - Feb 2026',
    type: 'Logística',
    description: 'Gestión de inventario y atención al cliente en entorno de alta demanda durante la temporada navideña.',
    achievements: [
      'Optimización del control de stock y fechas de caducidad mediante soluciones digitales propias.',
      'Atención directa al público, brindando asesoramiento sobre productos y resolviendo consultas en piso.',
      'Responsable de la apertura, cierre y mantenimiento general de la sucursal.'
    ]
  },
  {
    id: 'exp-hamburguesas-extremas',
    role: 'Empleado Polivalente',
    company: 'Hamburguesas Extremas',
    location: 'Buenos Aires, Argentina',
    date: 'Jun 2025 - Ago 2025',
    type: 'Atención al Público',
    description: 'Rotación por múltiples sectores operativos en sucursales de Lanús y Monte Grande.',
    achievements: [
      'Adaptabilidad extrema: desempeño en parrilla, armado, freidora y control de inventario bajo estrictas normas de salubridad.',
      'Cobertura autónoma de horas pico masivas en el sector de pedidos.',
      'Reconocido por la gerencia por la rápida curva de aprendizaje y por capacitar a nuevos compañeros.'
    ]
  },
  {
    id: 'exp-biblioteca-arica',
    role: 'Apoyo Técnico y Logística',
    company: 'Biblioteca Municipal de Arica',
    location: 'Arica, Chile',
    date: 'Jun 2024 - Mar 2025',
    type: 'Logística',
    description: 'Gestión integral del Auditorio Municipal y soporte operativo en diversas dependencias de la Dirección de Cultura.',
    achievements: [
      'Supervisión de instalaciones (3 pisos y subsuelo), apertura/cierre y gestión de salidas de emergencia.',
      'Soporte técnico de sonido para eventos en el Casino Municipal, Teatro Municipal y Parque Centenario.',
      'Optimización de logística interna: desde la reorganización de bodegas hasta la digitalización de atención al público (recepción y agendamiento).'
    ]
  },
  {
    id: 'exp-municipalidad-arica',
    role: 'Práctica Profesional: Gestión de Datos',
    company: 'Ilustre Municipalidad de Arica',
    location: 'Arica, Chile',
    date: 'Ago 2023 - Oct 2023',
    type: 'Práctica',
    description: 'Gestión, digitalización y auditoría de datos en la Dirección de Rentas (Permisos Municipales).',
    achievements: [
      'Auditoría manual y digitalización masiva de archivos históricos en papel hacia base de datos SQL.',
      'Análisis y actualización de perfiles de avalúos, verificando estados de deuda y habilitación de permisos.',
      'Optimización de flujos de trabajo: implementé atajos de teclado, comandos CMD y macros de Excel para colegas, reduciendo horas de trabajo repetitivo en la oficina.'
    ],
    technologies: ['SQL', 'Excel', 'CMD']
  },
  {
    id: 'exp-somos-musica',
    role: 'Sonidista Principal',
    company: 'Agrupación Somos Música',
    location: 'Arica, Chile',
    date: 'Feb 2022 - Mar 2025',
    type: 'Técnico',
    description: 'Responsable técnico total de la infraestructura de audio para eventos y galas de la agrupación sin fines de lucro.',
    achievements: [
      'Gestión logística integral: instalación, operación en vivo y desarme de equipos para eventos de alta complejidad.',
      'Resolución de problemas bajo presión extrema (imprevistos técnicos y de audio) manteniendo el espectáculo en marcha.',
      'Manejo de hasta 10+ micrófonos y coordinación en tiempo real con bandas, grupos de baile y artistas invitados.'
    ]
  }
];