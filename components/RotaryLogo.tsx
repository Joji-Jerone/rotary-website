/**
 * RotaryLogo — SVG gear wheel inspired by the Rotary International emblem.
 * 12 teeth, 6 spokes, Rotary gold (#F7B918).
 */
export default function RotaryLogo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  // Pre-calculated gear outline: 12 teeth, outerR=44, innerR=36, cx=cy=50
  // Points alternate between outerR and innerR at i*π/12 - π/2 increments
  const gearPath =
    "M50,6 L59.3,15.2 L72,11.9 L75.5,24.5 L88.1,28 L84.8,40.7 " +
    "L94,50 L84.8,59.3 L88.1,72 L75.5,75.5 L72,88.1 L59.3,84.8 " +
    "L50,94 L40.7,84.8 L28,88.1 L24.5,75.5 L11.9,72 L15.2,59.3 " +
    "L6,50 L15.2,40.7 L11.9,28 L24.5,24.5 L28,11.9 L40.7,15.2 Z";

  // 6 spokes at 60° intervals — each from hub edge (r=16) to rim (r=33)
  const spokes = [
    // [x1, y1, x2, y2]  — angle: -90°, -30°, 30°, 90°, 150°, 210°
    [50, 34, 50, 17],
    [63.9, 42, 78.6, 33.5],
    [63.9, 58, 78.6, 66.5],
    [50, 66, 50, 83],
    [36.1, 58, 21.4, 66.5],
    [36.1, 42, 21.4, 33.5],
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-label="Rotary Club Logo"
      role="img"
    >
      {/* Gear body — Rotary gold */}
      <path d={gearPath} fill="#F7B918" />

      {/* 6 white spokes creating the window effect */}
      {spokes.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
      ))}

      {/* Outer hub ring (white) */}
      <circle cx="50" cy="50" r="14" fill="white" />
      {/* Inner hub fill (gold) */}
      <circle cx="50" cy="50" r="8" fill="#F7B918" />
    </svg>
  );
}
