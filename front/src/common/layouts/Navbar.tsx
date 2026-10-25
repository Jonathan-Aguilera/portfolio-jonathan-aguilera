import { Link } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Sobre mí', href: '/sobre-mi' },
    { name: 'Experiencia', href: '/experiencia' },
    { name: 'Formación', href: '/formacion' },
    { name: 'Habilidades', href: '/habilidades' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className="text-white/90 hover:text-glint transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}