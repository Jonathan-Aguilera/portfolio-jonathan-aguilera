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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 text-white py-4 px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-6 lg:gap-10">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] shrink-0"
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