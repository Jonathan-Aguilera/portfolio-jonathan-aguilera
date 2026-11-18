import type { Project } from '../data/projects';

interface ProjectsCardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function ProjectsCard({
  project,
  isOpen,
  onToggle,
  className = '',
}: ProjectsCardProps) {
  const getStatusBadgeClass = (status: Project['status']) => {
    switch (status) {
      case 'Lanzado':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'En Desarrollo':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
    }
  };

  const hasActions =
    !!project.links?.enlace ||
    !!project.links?.demo ||
    !!project.links?.repo ||
    (project.images?.length ?? 0) > 0;

  return (
    <article
      data-project-id={project.id}
      className={`bg-white/10 backdrop-blur-md border rounded-2xl shadow-xl shadow-black/15 transition-colors duration-300 ${
        isOpen
          ? 'border-white/40 bg-white/15'
          : 'border-white/20 hover:border-white/30'
      } ${className}`}
    >
      {/* Header — siempre visible, actúa como toggle */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`project-${project.id}-content`}
        className="w-full text-left p-6 sm:p-8 cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 flex-wrap min-w-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {project.title}
            </h3>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusBadgeClass(
                project.status
              )}`}
            >
              {project.status}
            </span>
          </div>
          <ChevronIcon
            className={`h-6 w-6 text-white/70 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        <p className="text-xs font-semibold text-cyan-200/80 uppercase tracking-wider mb-3">
          {project.role}
        </p>

        <p className="text-white/90 text-base leading-relaxed">
          {project.shortDescription}
        </p>
      </button>

      {/* Contenido expandible */}
      <div
        id={`project-${project.id}-content`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6">
            {/* Problema y Solución */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Problema
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Solución
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Aportes */}
            {project.contribution?.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-3">
                  Aportes y Responsabilidades Clave
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  {project.contribution.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              {project.techStack.frontend.length > 0 && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="font-semibold text-white/95 mr-2">Frontend:</span>
                  {project.techStack.frontend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/10 rounded-md text-white/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.techStack.backend.length > 0 && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="font-semibold text-white/95 mr-2">Backend:</span>
                  {project.techStack.backend.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/10 rounded-md text-white/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.techStack.database.length > 0 && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="font-semibold text-white/95 mr-2">Base de Datos:</span>
                  {project.techStack.database.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/10 rounded-md text-white/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Acciones */}
            {hasActions && (
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                {project.links?.enlace && (
                  <a
                    href={project.links.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-white text-sm font-semibold transition-colors shadow-lg shadow-cyan-500/20"
                  >
                    Ver proyecto <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold transition-colors"
                  >
                    Ver demo <span aria-hidden="true">▶</span>
                  </a>
                )}

                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/30 text-sm font-semibold transition-colors"
                  >
                    Ver repositorio <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.images && project.images.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      // TODO: reemplazar por modal de galería
                      alert(JSON.stringify(project.images, null, 2));
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold transition-colors"
                  >
                    Ver imágenes <span aria-hidden="true">🖼</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}