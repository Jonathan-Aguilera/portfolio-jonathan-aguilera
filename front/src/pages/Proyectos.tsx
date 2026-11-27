import { useCallback, useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectsCard from '../components/ProjectsCard';

export default function Proyectos() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [closingId, setClosingId] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const close = useCallback((id: string) => {
    if (closingId === id) return;
    setClosingId(id);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setOpenId(null);
      setClosingId(null);
      closeTimer.current = null;
    }, 200);
  }, [closingId]);

  const toggle = useCallback((id: string) => {
    if (openId === id) close(id);
    else setOpenId(id);
  }, [openId, close]);

  // Click fuera + Escape cierran el modal
  useEffect(() => {
    if (!openId) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-project-id]')) close(openId);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close(openId);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [openId, close]);

  // Bloquea scroll del body mientras el modal está abierto
  useEffect(() => {
    if (!openId) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [openId]);

  // Limpieza del timer
  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <section id="projects" className="px-8 lg:px-12 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-theme-text">
        Proyectos
      </h2>
      <p className="text-theme-muted text-lg mb-12 max-w-3xl leading-relaxed">
        Explora una selección de mis trabajos más recientes. Aquí encontrarás soluciones que van desde arquitecturas complejas y liderazgo técnico hasta visualizaciones de datos interactivas, siempre con el enfoque puesto en la escalabilidad y la experiencia del usuario.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            isClosing={closingId === project.id}
            onToggle={() => toggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}