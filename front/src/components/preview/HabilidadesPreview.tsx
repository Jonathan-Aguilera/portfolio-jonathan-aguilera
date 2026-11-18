import { skillsData, type Skill } from '../../data/skills';
import SectionPreview from './SectionPreview';

const LEVEL_ORDER: Record<Skill['level'], number> = {
  'Avanzado': 4,
  'Intermedio': 3,
  'Básico': 2,
  'En aprendizaje': 1,
};

export default function HabilidadesPreview() {
  return (
    <SectionPreview title="Habilidades" href="/habilidades" ctaLabel="Ver todas las habilidades">
      <div className="grid gap-4 md:grid-cols-2">
        {skillsData.map((category) => {
          const topTwo = [...category.skills]
            .sort((a, b) => LEVEL_ORDER[b.level] - LEVEL_ORDER[a.level])
            .slice(0, 2);

          return (
            <div
              key={category.category}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-base font-bold text-white mb-3">{category.category}</h3>
              <ul className="space-y-2">
                {topTwo.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-white/90">{skill.name}</span>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-cyan-300/80">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionPreview>
  );
}