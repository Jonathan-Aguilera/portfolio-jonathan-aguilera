import type { NewsPost } from '../types';

export const newsPosts: NewsPost[] = [
  {
    slug: 'bienvenido-a-tsc',
    title: 'Bienvenido a Time Storm Creations',
    excerpt:
      'Este es el punto de partida: un espacio para compartir avances, decisiones técnicas y aprendizajes mientras construyo TSC. Sin filtros, sin humo, solo el proceso.',
    content: `Este es el punto de partida de Time Storm Creations.

              Un espacio para compartir avances, decisiones técnicas y aprendizajes mientras construyo TSC. Sin filtros, sin humo, solo el proceso.

              En las próximas entradas voy a hablar de arquitectura, de decisiones de stack y de los errores que me han hecho mejor desarrollador. También habrá espacio para lo que no sale bien: los callejones sin salida, los refactors que había que hacer antes, y las veces que aprendí más rompiendo algo que leyendo documentación.

              Si llegaste hasta acá, gracias por leer. Esto recién empieza.`,
    date: '2026-11-14',
    tags: ['Anuncio', 'TSC'],
    readTime: 3,
    author: 'Jonathan Aguilera',
  },
];