import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import SectionPreview from './SectionPreview';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../../types';

const getProjectBg = (id: string) => {
  const images: Record<string, string> = {
    reducar: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    codecraft: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    'punto-critico': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThq88tHHWeVzxg0tNluhFAyS249IK7uvbV4Kgv6SaNg&s=10',
  };
  return images[id] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop';
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Lanzado':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    case 'En Desarrollo':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    default:
      return 'bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30';
  }
};

export default function ProyectosPreview() {
  // Priorizar "Lanzado", luego completar con "En Desarrollo"
  const launched = projectsData.filter((p) => p.status === 'Lanzado');
  const inProgress = projectsData.filter((p) => p.status === 'En Desarrollo');
  const previewProjects: Project[] = [...launched, ...inProgress].slice(0, 3);

  return (
    <SectionPreview title="Proyectos" href="/proyectos" ctaLabel="Ver todos los proyectos">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {previewProjects.map((project) => (
          <Link
            key={project.id}
            to="/proyectos"
            className="group relative flex flex-col min-h-[320px] bg-[#1E3A5F] border border-[#3B82C4]/40 rounded-xl shadow-xl shadow-black/20 overflow-hidden transition-all duration-300 hover:border-[#3B82C4] hover:translate-y-[-4px]"
          >
            {/* Imagen de fondo + overlay (igual que ProjectsCard) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={getProjectBg(project.id)}
                alt=""
                className="w-full h-full object-cover opacity-20 grayscale brightness-90 transition-all duration-700 group-hover:opacity-30 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-[#0A1628]/70 to-[#0A1628]/95" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full p-5">
              {/* Header: status + título + flecha */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex flex-col gap-1.5 min-w-0">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border w-fit ${getStatusBadgeClass(project.status)}`}
                  >
                    {project.status}
                  </span>
                  <h3 className="text-xl font-bold text-[#F0F4F8] tracking-wide leading-tight group-hover:text-[#00D4FF] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowRight className="h-5 w-5 text-[#8BA4C0] group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>

              {/* Rol */}
              <p className="text-[11px] font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">
                {project.role}
              </p>

              {/* shortDescription */}
              <p className="text-[#8BA4C0] text-sm leading-relaxed font-medium line-clamp-3 mb-4">
                {project.shortDescription}
              </p>

              {/* Contribution (expuesto directamente) */}
              {project.contribution && project.contribution.length > 0 && (
                <ul className="mt-auto space-y-2">
                  {project.contribution.slice(0, 2).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-[#8BA4C0] leading-snug"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00D4FF] shrink-0" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        ))}
      </div>
    </SectionPreview>
  );
}