import Hero from '../sections/Hero'
import SobreMi from './SobreMi'
import Contacto from './Contacto'
import ProyectosPreview from '../sections/preview/ProyectosPreview'
import ExperienciaPreview from '../sections/preview/ExperienciaPreview'
import FormacionPreview from '../sections/preview/FormacionPreview'
import HabilidadesPreview from '../sections/preview/HabilidadesPreview'
import NoticiasPreview from '../sections/preview/NoticiasPreview';


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
        <NoticiasPreview />
        <ExperienciaPreview />
      </div>

      <div className="zone-deep-sea">
        <FormacionPreview />
        <HabilidadesPreview />
        <Contacto />
      </div>
    </div>
  )
}