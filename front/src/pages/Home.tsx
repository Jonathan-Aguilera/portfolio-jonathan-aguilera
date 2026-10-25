import Hero from '../sections/Hero'
import SobreMi from './SobreMi'
import Proyectos from './Proyectos'
import Experiencia from './Experiencia'
import Formacion from './Formacion'
import Habilidades from './Habilidades'
import Contacto from './Contacto'
import HorizonLine from '../common/components/HorizonLine'

export default function Home() {
  return (
    <div>
      {/* Zona 1: Superficie — cielo plano + línea del horizonte */}
      <div className="zone-surface">
        <Hero />
        <HorizonLine />
      </div>

      {/* Zona 2: Mar superior */}
      <div className="zone-upper-sea">
        <SobreMi />
        <Proyectos />
        <Experiencia />
        <Formacion />
      </div>

      {/* Zona 3: Mar inferior */}
      <div className="zone-deep-sea">
        <Habilidades />
        <Contacto />
      </div>
    </div>
  )
}