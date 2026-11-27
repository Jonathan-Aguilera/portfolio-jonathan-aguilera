import type { Project, ProjectStatus } from '../types';
import { ExternalLink, Play, GitBranch, Image as ImageIcon, X, ArrowRight } from 'lucide-react';

interface ProjectsCardProps {
  project: Project;
  isOpen: boolean;
  isClosing?: boolean;
  onToggle: () => void;
  className?: string;
}

export default function ProjectsCard({
  project,
  isOpen,
  isClosing = false,
  onToggle,
  className = '',
}: ProjectsCardProps) {
  const getStatusBadgeClass = (status: ProjectStatus) => {
    switch (status) {
      case 'Lanzado':
        return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/40';
      case 'En Desarrollo':
        return 'bg-amber-500/20 text-amber-500 border-amber-500/40';
      default:
        return 'bg-glint/20 text-glint border-glint/30';
    }
  };

  const hasActions =
    !!project.links?.enlace ||
    !!project.links?.demo ||
    !!project.links?.repo ||
    (project.images?.length ?? 0) > 0;

  const getProjectBg = (id: string) => {
    const images: Record<string, string> = {
      'reducar': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      'codecraft': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      'punto-critico': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThq88tHHWeVzxg0tNluhFAyS249IK7uvbV4Kgv6SaNg&s=10',
    };
    return images[id] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop';
  };

  return (
    <>
      {/* ==================== TARJETA PREVIEW ==================== */}
      <article
        data-project-id={project.id}
        className={`relative flex flex-col min-h-[250px] h-full bg-theme-card border border-theme-border rounded-xl shadow-lg shadow-black/20 transition-all duration-300 overflow-hidden group hover:border-glint/60 hover:translate-y-[-4px] ${className}`}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getProjectBg(project.id)}
            alt=""
            className="w-full h-full object-cover opacity-40 grayscale brightness-90 contrast-110 transition-all duration-700 group-hover:opacity-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-theme-bg/30 via-theme-bg/65 to-theme-bg/95" />
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="relative z-10 w-full h-full text-left p-4 sm:p-5 cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-glint/60 flex flex-col"
        >
          <div className="w-full">
            <div className="flex items-start justify-between gap-4 mb-1.5">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border w-fit ${getStatusBadgeClass(project.status)}`}>
                  {project.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-theme-text tracking-wide leading-tight">
                  {project.title}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 text-theme-muted group-hover:text-glint group-hover:translate-x-1 transition-all shrink-0" />
            </div>

            <p className="text-[11px] font-semibold text-glint uppercase tracking-wider">
              {project.role}
            </p>
          </div>

          <p className="text-theme-muted text-sm leading-relaxed mt-3 font-medium line-clamp-3">
            {project.shortDescription}
          </p>
        </button>
      </article>

      {/* ==================== MODAL ==================== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-theme-bg/80 backdrop-blur-sm modal-overlay ${isClosing ? 'closing' : ''}`}
            onClick={onToggle}
          />

          <article
            data-project-id={project.id}
            className={`relative z-10 w-full max-w-3xl max-h-[88vh] bg-theme-card border border-theme-border rounded-xl shadow-2xl shadow-black/30 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col modal-content ${isClosing ? 'closing' : ''}`}
          >
            {/* Background del modal */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={getProjectBg(project.id)}
                alt=""
                className="w-full h-full object-cover opacity-30 grayscale brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-theme-bg/30 via-theme-bg/70 to-theme-bg" />
            </div>

            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={onToggle}
              className="sticky top-3 right-3 z-50 ml-auto mr-3 mt-3 p-2 bg-theme-bg/60 hover:bg-glint/20 border border-theme-border rounded-lg text-theme-text transition-colors cursor-pointer shadow-lg"
              aria-label="Cerrar detalles"
            >
              <X size={18} />
            </button>

            {/* Contenido */}
            <div className="relative z-10 px-6 pb-8 pt-1 sm:px-8 sm:pb-10 sm:pt-2">
              {/* Header del modal */}
              <div className="border-b border-theme-border pb-6 mb-6">
                <div className="flex flex-col gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border w-fit ${getStatusBadgeClass(project.status)}`}>
                    {project.status}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-theme-text tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm font-bold text-glint uppercase tracking-widest mb-4">
                  {project.role}
                </p>

                <p className="text-theme-text text-base sm:text-lg leading-relaxed font-medium">
                  {project.shortDescription}
                </p>
              </div>

              <div className="space-y-8">
                {/* Problema / Solución */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="bg-theme-bg/50 backdrop-blur-md p-5 rounded-xl border border-theme-border">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-glint mb-3">
                      Problema
                    </h4>
                    <p className="text-sm text-theme-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="bg-theme-bg/50 backdrop-blur-md p-5 rounded-xl border border-theme-border">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-glint mb-3">
                      Solución
                    </h4>
                    <p className="text-sm text-theme-muted leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Aportes */}
                {project.contribution?.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-theme-text">
                      Aportes y Responsabilidades Clave
                    </h4>
                    <ul className="grid gap-3">
                      {project.contribution.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-theme-muted bg-theme-bg/40 p-3 rounded-xl border border-theme-border"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-glint shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tecnologías */}
                <div className="pt-6 border-t border-theme-border space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-theme-text">
                    Tecnologías Utilizadas
                  </h4>

                  <div className="flex flex-col gap-3">
                    {project.techStack.frontend.length > 0 && (
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[11px] font-bold text-theme-muted w-20">
                          Frontend
                        </span>
                        {project.techStack.frontend.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-theme-bg/50 rounded-lg text-xs text-theme-text border border-theme-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.techStack.backend.length > 0 && (
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[11px] font-bold text-theme-muted w-20">
                          Backend
                        </span>
                        {project.techStack.backend.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-theme-bg/50 rounded-lg text-xs text-theme-text border border-theme-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.techStack.database.length > 0 && (
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[11px] font-bold text-theme-muted w-20">
                          Base Datos
                        </span>
                        {project.techStack.database.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-theme-bg/50 rounded-lg text-xs text-theme-text border border-theme-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              {hasActions && (
                <div className="mt-8 pt-6 border-t border-theme-border flex flex-wrap gap-4">
                  {project.links?.enlace && (
                    <a
                      href={project.links.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-glint hover:bg-glint/80 text-theme-bg text-sm font-bold transition-all shadow-lg shadow-glint/20"
                    >
                      <ExternalLink size={18} />
                      Ver proyecto en vivo
                    </a>
                  )}

                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-glint/15 hover:bg-glint/25 text-theme-text border border-glint/40 text-sm font-bold transition-all"
                    >
                      <Play size={18} />
                      Ver demo video
                    </a>
                  )}

                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-theme-bg/50 hover:bg-glint/20 text-theme-text border border-theme-border text-sm font-bold transition-all"
                    >
                      <GitBranch size={18} />
                      Repositorio GitHub
                    </a>
                  )}

                  {project.images && project.images.length > 0 && (
                    <button
                      type="button"
                      onClick={() => alert(JSON.stringify(project.images, null, 2))}
                      className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-theme-bg/50 hover:bg-glint/20 text-theme-text border border-theme-border text-sm font-bold transition-all cursor-pointer"
                    >
                      <ImageIcon size={18} />
                      Ver imágenes
                    </button>
                  )}
                </div>
              )}
            </div>
          </article>
        </div>
      )}
    </>
  );
}