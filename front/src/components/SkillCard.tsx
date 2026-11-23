import type { SkillCategory, SkillItem } from '../types';
import { Monitor, Server, Layers, Users, ArrowRight } from 'lucide-react';

interface SkillCardProps {
  skillCategory: SkillCategory;
}

const sectorConfig = {
  frontend: {
    icon: <Monitor className="w-5 h-5" />,
    accent: 'from-sky-500/20 to-transparent',
    border: 'border-sky-500/20',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  },
  backend: {
    icon: <Server className="w-5 h-5" />,
    accent: 'from-emerald-500/20 to-transparent',
    border: 'border-emerald-500/20',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  architecture: {
    icon: <Layers className="w-5 h-5" />,
    accent: 'from-violet-500/20 to-transparent',
    border: 'border-violet-500/20',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  },
  'soft-skills': {
    icon: <Users className="w-5 h-5" />,
    accent: 'from-amber-500/20 to-transparent',
    border: 'border-amber-500/20',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
};

export default function SkillCard({ skillCategory }: SkillCardProps) {
  const { sector, title, description, items } = skillCategory;
  const config = sectorConfig[sector] || sectorConfig.frontend;

  // Agrupar items por categoría
  const primary = items.filter((i) => i.category === 'primary');
  const exploring = items.filter((i) => i.category === 'exploring');
  const nextStep = items.filter((i) => i.category === 'next-step');
  const competencies = items.filter((i) => i.category === 'competency');

  const isSoftSkills = sector === 'soft-skills';

  return (
    <article
      className={`relative flex flex-col bg-white/5 backdrop-blur-md border rounded-2xl overflow-hidden ${config.border}`}
    >
      {/* Header */}
      <div className={`px-5 pt-5 pb-4 bg-gradient-to-r ${config.accent}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-glint">{config.icon}</span>
          <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="p-5 flex flex-col gap-6 flex-1">
        {/* ========== SOFT SKILLS ========== */}
        {isSoftSkills ? (
          <div className="space-y-5">
            {competencies.map((item) => (
              <div key={item.name} className="space-y-1.5">
                <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                {item.context && (
                  <p className="text-sm text-slate-400 leading-relaxed">{item.context}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ========== STACK PRINCIPAL ========== */}
            {primary.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Stack Principal
                </h4>
                <div className="space-y-2.5">
                  {primary.map((item) => (
                    <PrimaryItem key={item.name} item={item} badgeClass={config.badge} />
                  ))}
                </div>
              </div>
            )}

            {/* ========== EN EXPLORACIÓN ========== */}
            {exploring.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5">
                  En Exploración
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exploring.map((item) => (
                    <span
                      key={item.name}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ========== PRÓXIMO PASO ========== */}
            {nextStep.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5">
                  Próximo Paso
                </h4>
                <div className="space-y-2">
                  {nextStep.map((item) => (
                    <div
                      key={item.name}
                      className="flex gap-2.5 items-start p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <ArrowRight className="w-4 h-4 text-glint mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}

function PrimaryItem({ item, badgeClass }: { item: SkillItem; badgeClass: string }) {
  return (
    <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <h5 className="text-sm font-semibold text-white leading-snug">{item.name}</h5>
      </div>

      {/* Context o proyectos */}
      {(item.context || (item.projects && item.projects.length > 0)) && (
        <div className="mt-1.5 space-y-1">
          {item.context && (
            <p className="text-xs text-slate-400 leading-relaxed">{item.context}</p>
          )}
          {item.projects && item.projects.length > 0 && (
            <p className="text-xs text-slate-500">
              <span className="text-slate-400">→ </span>
              {item.projects.join(', ')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}