import type { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export default function ExperienceCard({ experience, className = '' }: ExperienceCardProps) {
  return (
    <article
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${className}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {experience.role}
            </h3>
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {experience.type}
            </span>
          </div>

          <p className="text-cyan-300/90 font-medium flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
            {experience.company}
          </p>

          <p className="text-slate-400 text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {experience.location}
          </p>
        </div>

        <div className="flex-shrink-0">
          <span className="inline-block text-xs font-mono font-semibold text-slate-300 bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg">
            {experience.date}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-slate-300 leading-relaxed text-base">
          {experience.description}
        </p>

        {experience.achievements && experience.achievements.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Logros y Responsabilidades</h4>
            <ul className="grid gap-3">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-400 group/item">
                  <span className="text-cyan-500 mt-1.5 h-1 w-1 rounded-full bg-cyan-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                  <span className="group-hover/item:text-slate-200 transition-colors">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
