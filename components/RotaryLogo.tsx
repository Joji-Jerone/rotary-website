// ── Minimal inline gear used only for the tiny "wheel" badge (size ≤ 24px) ──
function GearSVG({ size, className }: { size: number; className: string }) {
  const GEAR_PATH =
    "M50,6 L59.3,15.2 L72,11.9 L75.5,24.5 L88.1,28 L84.8,40.7 " +
    "L94,50 L84.8,59.3 L88.1,72 L75.5,75.5 L72,88.1 L59.3,84.8 " +
    "L50,94 L40.7,84.8 L28,88.1 L24.5,75.5 L11.9,72 L15.2,59.3 " +
    "L6,50 L15.2,40.7 L11.9,28 L24.5,24.5 L28,11.9 L40.7,15.2 Z";
  const SPOKES: [number, number, number, number][] = [
    [50, 34, 50, 17], [63.9, 42, 78.6, 33.5], [63.9, 58, 78.6, 66.5],
    [50, 66, 50, 83],  [36.1, 58, 21.4, 66.5], [36.1, 42, 21.4, 33.5],
  ];
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-label="Rotary Club Logo" role="img">
      <path d={GEAR_PATH} fill="#F7B918" />
      {SPOKES.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="6.5" strokeLinecap="round" />
      ))}
      <circle cx="50" cy="50" r="14" fill="white" />
      <circle cx="50" cy="50" r="8"  fill="#F7B918" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function RotaryLogo({
  size = 40,
  className = "",
  variant = "wheel",
  dark: _dark = false,
}: {
  size?: number;
  className?: string;
  variant?: "wheel" | "full";
  dark?: boolean;
}) {
  if (variant === "wheel") {
    return <GearSVG size={size} className={className} />;
  }

  // full — use the imported SVG file directly
  // rotary-logo.svg natural dimensions: 1875 × 1020  → ratio ≈ 1.838
  const width = Math.round(size * (1875 / 1020));
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/rotary-logo.svg"
      alt="Rotary Club of Sirumugai, Dist 3203"
      width={width}
      height={size}
      className={className}
      style={_dark ? { mixBlendMode: "screen" } : undefined}
    />
  );
}
