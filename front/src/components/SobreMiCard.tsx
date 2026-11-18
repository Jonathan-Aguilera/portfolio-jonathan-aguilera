interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SobreMiCard({ title, children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg shadow-black/10 hover:border-white/40 hover:bg-white/15 transition-colors ${className}`}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className="text-white/90 leading-relaxed">{children}</div>
    </div>
  );
}