import { skillsData } from '../../data/skills';
import SectionPreview from './SectionPreview';
import { Monitor, Server, Layers } from 'lucide-react';

const sectorIcons = {
  frontend: <Monitor className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  architecture: <Layers className="w-4 h-4" />,
};

export default function HabilidadesPreview() {
  const technicalSkills = skillsData.filter(
    (cat) => cat.sector !== 'soft-skills'
  );

  return (
    <SectionPreview
      title="Habilidades"
      href="/habilidades"
      ctaLabel="Ver todas las habilidades"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {technicalSkills.map((category) => {
          const topSkills = category.items
            .filter((item) => item.category === 'primary')
            .slice(0, 2);

          return (
            <div
              key={category.sector}
              className="bg-ocean-text/5 backdrop-blur-md border border-ocean-text/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-glint">
                  {sectorIcons[category.sector as keyof typeof sectorIcons]}
                </span>
                <h3 className="text-sm font-bold text-ocean-text truncate">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {topSkills.map((skill) => (
                  <li key={skill.name} className="text-sm">
                    <span className="text-ocean-text/90 leading-snug block">
                      {skill.name}
                    </span>
                    {skill.projects && skill.projects.length > 0 && (
                      <span className="text-[11px] text-ocean-muted/80 mt-0.5 block truncate">
                        → {skill.projects.slice(0, 2).join(', ')}
                        {skill.projects.length > 2 ? '…' : ''}
                      </span>
                    )}
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