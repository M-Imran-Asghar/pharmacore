export default function DnaIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left strand */}
      <path
        d="M60 20 C40 60 40 100 60 140 C80 180 80 220 60 260 C40 300 40 320 60 340"
        stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" fill="none"
      />
      {/* Right strand */}
      <path
        d="M140 20 C160 60 160 100 140 140 C120 180 120 220 140 260 C160 300 160 320 140 340"
        stroke="#10b981" strokeWidth="3" strokeLinecap="round" fill="none"
      />

      {/* Base pairs */}
      {[50, 90, 130, 170, 210, 250, 290].map((y, i) => {
        const offset = i % 2 === 0 ? 0 : 4;
        return (
          <g key={y}>
            <line
              x1={65 + offset} y1={y} x2={135 - offset} y2={y}
              stroke={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"}
              strokeWidth="2" strokeLinecap="round"
            />
            <circle cx={65 + offset} cy={y} r="4" fill={i % 3 === 0 ? "#fef3c7" : i % 3 === 1 ? "#ede9fe" : "#fce7f3"}
              stroke={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"} strokeWidth="1.5" />
            <circle cx={135 - offset} cy={y} r="4" fill={i % 3 === 0 ? "#fef3c7" : i % 3 === 1 ? "#ede9fe" : "#fce7f3"}
              stroke={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"} strokeWidth="1.5" />
          </g>
        );
      })}

      {/* Decorative dots */}
      <circle cx="30" cy="80" r="3" fill="#e2e8f0" />
      <circle cx="170" cy="160" r="3" fill="#e2e8f0" />
      <circle cx="25" cy="240" r="4" fill="#e2e8f0" />
      <circle cx="175" cy="300" r="3" fill="#e2e8f0" />
    </svg>
  );
}
