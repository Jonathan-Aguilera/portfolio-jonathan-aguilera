import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import SectionPreview from './SectionPreview';

export default function ProyectosPreview() {
  return (
    <SectionPreview title="Proyectos" href="/proyectos" ctaLabel="Ver todos los proyectos">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            to="/proyectos"
            className="group flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 hover:border-white/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full border border-white/30 text-white/80">
                {project.status}
              </span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-200/70 mb-2">
              {project.role}
            </p>
            <p className="text-sm text-white/85 leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </SectionPreview>
  );
}