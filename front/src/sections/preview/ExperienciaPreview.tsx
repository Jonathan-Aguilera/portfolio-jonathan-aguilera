import { experiencesData } from '../../data/experience';
import SectionPreview from './SectionPreview';

const PREVIEW_COUNT = 3;

export default function ExperienciaPreview() {
  const items = experiencesData.slice(0, PREVIEW_COUNT);

  return (
    <SectionPreview title="Experiencia" href="/experiencia" ctaLabel="Ver trayectoria completa">
      <div className="grid gap-4">
        {items.map((exp) => (
          <article
            key={exp.id}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>
              <span className="text-xs font-mono text-slate-400">{exp.date}</span>
            </div>
            <p className="text-sm text-cyan-300/90 mb-2">
              {exp.company} · {exp.location}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
              {exp.description}
            </p>
          </article>
        ))}
      </div>
    </SectionPreview>
  );
}