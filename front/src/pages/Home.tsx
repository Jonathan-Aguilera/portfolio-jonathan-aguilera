import Hero from '../sections/Hero'
import SobreMiPreview from '../sections/preview/SobreMiPreview'
import Contacto from './Contacto'
import ProyectosPreview from '../sections/preview/ProyectosPreview'
import ExperienciaPreview from '../sections/preview/ExperienciaPreview'
import FormacionPreview from '../sections/preview/FormacionPreview'
import HabilidadesPreview from '../sections/preview/HabilidadesPreview'
import NoticiasPreview from '../sections/preview/NoticiasPreview';

import surfaceImageDay from '../assets/fondoMarPulido1.webp'
import surfaceImageNight from '../assets/fondoMarPulido2.webp'

export default function Home() {
  return (
    <div className="relative">
      <div className="ocean-vignette-overlay" />

      <div
        className="relative zone-surface pt-[var(--header-h,64px)]"
        style={{
          '--surface-img-day': `url(${surfaceImageDay})`,
          '--surface-img-night': `url(${surfaceImageNight})`,
        } as React.CSSProperties}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-b from-transparent to-[var(--ocean-upper-1)] pointer-events-none z-0" />

        <div className="relative z-20">
          <Hero />
          <SobreMiPreview />
        </div>
      </div>

      <div className="relative zone-upper-sea">
        <div className="relative z-20">
          <ProyectosPreview />
          <NoticiasPreview />
          <ExperienciaPreview />
        </div>
      </div>

      <div className="relative zone-deep-sea">
        <div className="relative z-20">
          <FormacionPreview />
          <HabilidadesPreview />
          <Contacto variant="ocean" />
        </div>
      </div>
    </div>
  )
}