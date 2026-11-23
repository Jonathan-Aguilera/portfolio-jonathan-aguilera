interface AvailabilityBadgeProps {
  className?: string;
}

export default function AvailabilityBadge({ className = '' }: AvailabilityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50/95 backdrop-blur-md text-emerald-900 border border-emerald-300/80 text-[11px] font-semibold whitespace-nowrap shadow-sm shadow-emerald-900/10 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
      </span>
      Disponible para trabajar
    </span>
  );
}