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
            className="bg-ocean-card border border-ocean-border rounded-xl p-5 hover:border-ocean-border-hover transition-all duration-300 shadow-lg shadow-black/10"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold text-ocean-text leading-tight">
                {exp.role}
              </h3>
              <span className="flex items-center gap-1.5 text-xs text-ocean-muted font-medium bg-abyss-deep/50 px-2.5 py-1 rounded-md border border-ocean-border shrink-0">
                <Calendar className="w-3.5 h-3.5 text-glint" />
                {exp.date}
              </span>
            </div>

            <p className="text-sm text-glint font-medium mb-3">
              {exp.company}
            </p>

            <p className="text-sm text-ocean-muted leading-relaxed line-clamp-2">
              {exp.description}
            </p>
          </article>
        ))}
      </div>
    </SectionPreview>
  );
}