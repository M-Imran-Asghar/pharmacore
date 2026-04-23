export default function LabProcessIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Flask 1 */}
      <path
        d="M60 60 L60 130 L30 180 Q25 190 35 195 L85 195 Q95 190 90 180 L60 130"
        stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" strokeLinejoin="round"
      />
      <line x1="45" y1="75" x2="75" y2="75" stroke="#1d4ed8" strokeWidth="1.5" />
      <circle cx="55" cy="160" r="5" fill="#10b981" opacity="0.7" />
      <circle cx="68" cy="170" r="3" fill="#10b981" opacity="0.5" />
      <circle cx="72" cy="155" r="4" fill="#10b981" opacity="0.6" />

      {/* Arrow 1 */}
      <path d="M105 127 L145 127" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 122 L148 127 L140 132" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Centrifuge */}
      <circle cx="185" cy="127" r="35" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
      <circle cx="185" cy="127" r="20" stroke="#1d4ed8" strokeWidth="1.5" fill="white" />
      <line x1="185" y1="92" x2="185" y2="107" stroke="#1d4ed8" strokeWidth="2" />
      <line x1="185" y1="147" x2="185" y2="162" stroke="#1d4ed8" strokeWidth="2" />
      <line x1="150" y1="127" x2="165" y2="127" stroke="#1d4ed8" strokeWidth="2" />
      <line x1="205" y1="127" x2="220" y2="127" stroke="#1d4ed8" strokeWidth="2" />
      <circle cx="185" cy="127" r="5" fill="#1d4ed8" />

      {/* Arrow 2 */}
      <path d="M230 127 L270 127" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M265 122 L273 127 L265 132" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Test tubes rack */}
      <rect x="285" y="90" width="12" height="60" rx="6" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
      <rect x="303" y="95" width="12" height="55" rx="6" fill="#a7f3d0" stroke="#10b981" strokeWidth="1.5" />
      <rect x="321" y="100" width="12" height="50" rx="6" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
      <rect x="339" y="88" width="12" height="62" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      <line x1="280" y1="155" x2="360" y2="155" stroke="#94a3b8" strokeWidth="2" />

      {/* Arrow 3 */}
      <path d="M370 127 L410 127" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M405 122 L413 127 L405 132" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Pill/capsule output */}
      <ellipse cx="440" cy="115" rx="22" ry="10" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
      <line x1="440" y1="105" x2="440" y2="125" stroke="#1d4ed8" strokeWidth="1.5" />
      <ellipse cx="440" cy="135" rx="22" ry="10" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" />
      <line x1="440" y1="125" x2="440" y2="145" stroke="#10b981" strokeWidth="1.5" />
      <ellipse cx="440" cy="155" rx="22" ry="10" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />

      {/* Labels */}
      <text x="60" y="215" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="500">Synthesis</text>
      <text x="185" y="215" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="500">Separation</text>
      <text x="320" y="215" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="500">Analysis</text>
      <text x="440" y="215" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="500">Formulation</text>

      {/* Step numbers */}
      <circle cx="60" cy="240" r="10" fill="#1d4ed8" />
      <text x="60" y="244" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">1</text>
      <circle cx="185" cy="240" r="10" fill="#1d4ed8" />
      <text x="185" y="244" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">2</text>
      <circle cx="320" cy="240" r="10" fill="#1d4ed8" />
      <text x="320" y="244" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">3</text>
      <circle cx="440" cy="240" r="10" fill="#10b981" />
      <text x="440" y="244" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">4</text>
    </svg>
  );
}
