import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 text-white py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
          Jonathan Aguilera
        </h1>
        <Navbar />
      </div>
    </header>
  );
}