import { experiencesData } from '../../data/experience';
import SectionPreview from './SectionPreview';
import { Calendar } from 'lucide-react';

const PREVIEW_COUNT = 2;

export default function ExperienciaPreview() {
  const items = experiencesData.slice(0, PREVIEW_COUNT);

  return (
    <SectionPreview title="Experiencia" href="/experiencia" ctaLabel="Ver trayectoria completa">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((exp) => (
          <article
            key={exp.id}
            className="bg-[#1E3A5F] border border-[#3B82C4]/40 rounded-xl p-5 hover:border-[#3B82C4] transition-all duration-300 shadow-lg shadow-black/10"
          >
            {/* Cabecera: Rol + Fecha */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold text-[#F0F4F8] leading-tight">
                {exp.role}
              </h3>
              <span className="flex items-center gap-1.5 text-xs text-[#8BA4C0] font-medium bg-[#0A1628]/50 px-2.5 py-1 rounded-md border border-[#3B82C4]/30 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#00D4FF]/80" />
                {exp.date}
              </span>
            </div>

            {/* Compañía */}
            <p className="text-sm text-[#00D4FF] font-medium mb-3">
              {exp.company}
            </p>

            {/* Descripción */}
            <p className="text-sm text-[#8BA4C0] leading-relaxed line-clamp-2">
              {exp.description}
            </p>
          </article>
        ))}
      </div>
    </SectionPreview>
  );
}