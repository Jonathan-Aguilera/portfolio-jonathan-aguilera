import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function PageLayout() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-theme-text transition-colors duration-300">
      <Header ref={headerRef} />
      <main className="flex-grow pt-[var(--header-h)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}