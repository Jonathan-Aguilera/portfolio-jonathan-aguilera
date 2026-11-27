import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';

export default function Habilidades() {
  const technicalSkills = skillsData.filter(
    (cat) => cat.sector !== 'soft-skills'
  );
  const softSkills = skillsData.filter(
    (cat) => cat.sector === 'soft-skills'
  );

  return (
    <section id="skills" className="px-6 lg:px-12 py-20 max-w-6xl mx-auto space-y-16">

      {/* ===================== SECCIÓN 1: HABILIDADES TÉCNICAS ===================== */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-text tracking-tight">
            Habilidades Técnicas
          </h2>
          <div className="h-px bg-gradient-to-r from-glint/50 to-transparent flex-1" />
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {technicalSkills.map((category) => (
            <SkillCard key={category.sector} skillCategory={category} />
          ))}
        </div>
      </div>

      {/* ===================== SECCIÓN 2: COMPETENCIAS TRANSVERSALES ===================== */}
      {softSkills.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text tracking-tight">
              Competencias Transversales
            </h2>
            <div className="h-px bg-gradient-to-r from-glint/40 to-transparent flex-1" />
          </div>

          <div className="grid gap-6 grid-cols-1">
            {softSkills.map((category) => (
              <SkillCard key={category.sector} skillCategory={category} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}