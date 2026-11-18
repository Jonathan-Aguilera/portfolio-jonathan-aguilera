import Hero from '../sections/Hero'
import SobreMi from './SobreMi'
import Contacto from './Contacto'
import ProyectosPreview from '../components/preview/ProyectosPreview'
import ExperienciaPreview from '../components/preview/ExperienciaPreview'
import FormacionPreview from '../components/preview/FormacionPreview'
import HabilidadesPreview from '../components/preview/HabilidadesPreview'


import surfaceImage from '../assets/surface.webp'

export default function Home() {
  return (
    <div>
      <div
        className="zone-surface pt-[var(--header-h,64px)]"
        style={{
          backgroundImage: `url(${surfaceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Hero />
        <SobreMi variant="preview" />
      </div>

      <div className="zone-upper-sea">
        <ProyectosPreview />
        <ExperienciaPreview />
        <FormacionPreview />
      </div>

      <div className="zone-deep-sea">
        <HabilidadesPreview />
        <Contacto />
      </div>
    </div>
  )
}