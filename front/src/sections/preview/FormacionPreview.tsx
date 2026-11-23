import EducationCard from '../../components/EducationCard';
import { certificatesData } from '../../data/education';
import SectionPreview from './SectionPreview';

export default function FormacionPreview() {
  const topLevel = certificatesData.filter((cert) => cert.level === 1);

  return (
    <SectionPreview
      title="Formación"
      href="/formacion"
      ctaLabel="Ver toda la formación"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {topLevel.map((cert) => (
          <EducationCard
            key={cert.id}
            education={cert}
            onViewImage={() => {}} // En preview no abrimos el modal
          />
        ))}
      </div>
    </SectionPreview>
  );
}