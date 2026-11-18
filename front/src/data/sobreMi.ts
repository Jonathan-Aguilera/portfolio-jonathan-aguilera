export interface AboutInfo {
  id: string;
  title: string;
  description: string;
}

export const aboutData: AboutInfo[] = [
  {
    id: 'presentacion',
    title: 'Presentación',
    description: 'Soy Jonathan Aguilera, desarrollador de software con foco en backend. Construyo APIs y sistemas completos con Node, Express y Firebase, y resuelvo el frontend con React cuando el proyecto lo requiere. Trabajo con autonomía, cuido la seguridad desde el diseño y uso IA como herramienta para potenciar mi productividad.'
  },
  {
    id: 'filosofia',
    title: 'Mi Filosofía: Todos por igual',
    description: 'La tecnología debe ser para todos por igual. Diseño pensando tanto en el experto como en quien recién comienza. En mis proyectos, como CodeCraft, la ayuda es adaptativa: aparece y se apaga según el usuario la necesita, asegurando una experiencia accesible y fluida.'
  },
  {
    id: 'trayectoria',
    title: 'De dónde vengo',
    description: 'Mi camino no fue recto. Desde gestionar datos en la Municipalidad de Arica hasta trabajar en entornos de alta presión en Buenos Aires. Esa mezcla de atención al público, resolución de imprevistos en vivo y adaptabilidad es la base con la que hoy resuelvo problemas técnicos con criterio.'
  },
  {
    id: 'metodologia',
    title: 'Cómo trabajo',
    description: 'Mi stack principal es Node, Express, Firebase y React. Me adapto a Python o diferentes SQL/NoSQL según el proyecto. Uso IA desde 2021 para planificar y revisar código, lo que me permite acelerar el desarrollo sin sacrificar la calidad. Además, manejo documentación técnica en inglés (nivel B2 en progreso).'
  },
  {
    id: 'vision',
    title: 'Hacia dónde voy',
    description: 'Mi meta a largo plazo es consolidar TSC (Time Storm Creations), mi propia empresa de desarrollo. Voy paso a paso, con los pies en la tierra, enfocado hoy en aportar valor, aprender y crecer en proyectos desafiantes donde pueda sumar mi experiencia y visión.'
  }
];
