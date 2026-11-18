import Hero from '../sections/Hero'
import SobreMi from './SobreMi'
import Proyectos from './Proyectos'
import Experiencia from './Experiencia'
import Formacion from './Formacion'
import Habilidades from './Habilidades'
import Contacto from './Contacto'
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
        <Proyectos />
        <Experiencia />
        <Formacion />
      </div>

      <div className="zone-deep-sea">
        <Habilidades />
        <Contacto />
      </div>
    </div>
  )
}