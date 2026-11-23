import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface SectionPreviewProps {
  title: string;
  href: string;
  ctaLabel: string;
  children: ReactNode;
}

export default function SectionPreview({ title, href, ctaLabel, children }: SectionPreviewProps) {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1" />
        <Link
          to={href}
          className="text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors whitespace-nowrap"
        >
          {ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
      {children}
    </section>
  );
}