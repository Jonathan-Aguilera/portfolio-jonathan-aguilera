import type { SkillCategory, Skill } from '../data/skills';

interface SkillCardProps {
  skillCategory: SkillCategory;
  className?: string;
}

export default function SkillCard({ skillCategory, className = '' }: SkillCardProps) {
  const getLevelBadgeClass = (level: Skill['level']) => {
    switch (level) {
      case 'Avanzado':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Intermedio':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Básico':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    }
  };

  return (
    <article
      className={`group relative flex flex-col h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
          {skillCategory.category}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {skillCategory.description}
        </p>
      </div>

      <div className="flex-1 space-y-4">
        {skillCategory.skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors space-y-2"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-white text-sm sm:text-base">
                {skill.name}
              </span>
              <span
                className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getLevelBadgeClass(
                  skill.level
                )}`}
              >
                {skill.level}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300 font-medium">Contexto: </strong>
              {skill.context}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
