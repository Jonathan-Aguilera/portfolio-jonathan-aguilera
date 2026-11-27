import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HeaderActions from './HeaderActions';
import AvailabilityBadge from '../components/ui/AvailabilityBadge';

interface HeaderProps {
  ref?: React.Ref<HTMLElement>;
}

export default function Header({ ref }: HeaderProps) {
  return (
    <header
      ref={ref}
      // CAMBIOS AQUÍ: bg-transparent en vez de bg-theme-header, y mantenemos el border-b
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent border-b border-theme-border text-theme-text py-4 px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-6 lg:gap-10">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-theme-text shrink-0 transition-colors"
        >
          Jonathan Aguilera T.
        </Link>

        <div className="flex-1 flex items-center justify-center gap-4 min-w-0">
          <Navbar />
          <div className="hidden lg:block shrink-0">
            <AvailabilityBadge />
          </div>
        </div>

        <HeaderActions />
      </div>
    </header>
  );
}