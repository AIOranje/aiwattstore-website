export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer energy ring */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary opacity-20"
      />

      {/* Lightning bolt (energy) */}
      <path d="M 110 40 L 85 100 L 105 100 L 90 160 L 130 90 L 110 90 Z" fill="currentColor" className="text-primary" />

      {/* AI Neural network nodes */}
      <g className="text-primary">
        {/* Top nodes */}
        <circle cx="70" cy="60" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="100" cy="50" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="130" cy="60" r="6" fill="currentColor" opacity="0.8" />

        {/* Middle nodes */}
        <circle cx="60" cy="100" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="140" cy="100" r="6" fill="currentColor" opacity="0.8" />

        {/* Bottom nodes */}
        <circle cx="70" cy="140" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="100" cy="150" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="130" cy="140" r="6" fill="currentColor" opacity="0.8" />
      </g>

      {/* Neural connections */}
      <g className="text-primary" opacity="0.3" strokeWidth="1.5" fill="none" stroke="currentColor">
        <line x1="70" y1="60" x2="100" y2="50" />
        <line x1="100" y1="50" x2="130" y2="60" />
        <line x1="70" y1="60" x2="60" y2="100" />
        <line x1="130" y1="60" x2="140" y2="100" />
        <line x1="60" y1="100" x2="70" y2="140" />
        <line x1="140" y1="100" x2="130" y2="140" />
        <line x1="70" y1="140" x2="100" y2="150" />
        <line x1="130" y1="140" x2="100" y2="150" />
      </g>

      {/* Glow effect circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary opacity-10"
        style={{ filter: "blur(8px)" }}
      />
    </svg>
  )
}
