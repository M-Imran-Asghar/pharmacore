export default function QualityShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield */}
      <path
        d="M150 20 L260 65 L260 160 C260 220 210 270 150 295 C90 270 40 220 40 160 L40 65 Z"
        fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="round"
      />
      {/* Inner shield */}
      <path
        d="M150 45 L235 82 L235 160 C235 207 198 248 150 268 C102 248 65 207 65 160 L65 82 Z"
        fill="white" stroke="#1d4ed8" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6"
      />

      {/* Checkmark */}
      <path
        d="M105 160 L135 190 L195 125"
        stroke="#10b981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Decorative circles */}
      <circle cx="150" cy="158" r="55" stroke="#10b981" strokeWidth="1" strokeDasharray="5 4" fill="none" opacity="0.4" />

      {/* Stars / certification marks */}
      <circle cx="80" cy="55" r="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      <circle cx="220" cy="55" r="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      <circle cx="150" cy="30" r="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />

      {/* Bottom labels */}
      <rect x="95" y="285" width="110" height="22" rx="11" fill="#1d4ed8" />
      <text x="150" y="300" textAnchor="middle" fontSize="10" fill="white" fontWeight="600">ISO 9001 Certified</text>
    </svg>
  );
}
