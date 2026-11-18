import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HeaderActions from './HeaderActions';

interface HeaderProps {
  ref?: React.Ref<HTMLElement>;
}

export default function Header({ ref }: HeaderProps) {
  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 text-white py-4 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] justify-self-start"
        >
          Jonathan Aguilera
        </Link>

        <div className="justify-self-center">
          <Navbar />
        </div>

        <div className="justify-self-end">
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}