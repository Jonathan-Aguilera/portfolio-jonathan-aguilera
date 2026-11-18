import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';

export default function Habilidades() {
  return (
    <section id="skills" className="px-6 py-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Habilidades Técnicas y Blandas</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillsData.map((category, index) => (
          <SkillCard key={index} skillCategory={category} />
        ))}
      </div>
    </section>
  );
}
