import { useEffect, useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectsCard from '../components/ProjectsCard';

export default function Proyectos() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!openId) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-project-id]')) {
        setOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openId]);

  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
        Proyectos
      </h2>
      <div className="flex flex-col gap-4">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            onToggle={() =>
              setOpenId(openId === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    </section>
  );
}