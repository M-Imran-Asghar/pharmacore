export default function MoleculeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bonds */}
      <line x1="200" y1="160" x2="140" y2="100" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="200" y1="160" x2="260" y2="100" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="200" y1="160" x2="200" y2="240" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="100" x2="80" y2="130" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="100" x2="130" y2="40" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="260" y1="100" x2="320" y2="130" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="260" y1="100" x2="270" y2="40" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="200" y1="240" x2="140" y2="280" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <line x1="200" y1="240" x2="260" y2="280" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      {/* Double bond */}
      <line x1="198" y1="158" x2="138" y2="98" stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Atoms */}
      <circle cx="200" cy="160" r="14" fill="white" stroke="#1d4ed8" strokeWidth="2.5" />
      <text x="200" y="165" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1d4ed8">C</text>

      <circle cx="140" cy="100" r="14" fill="white" stroke="#1d4ed8" strokeWidth="2.5" />
      <text x="140" y="105" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1d4ed8">N</text>

      <circle cx="260" cy="100" r="14" fill="white" stroke="#1d4ed8" strokeWidth="2.5" />
      <text x="260" y="105" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1d4ed8">O</text>

      <circle cx="200" cy="240" r="14" fill="white" stroke="#10b981" strokeWidth="2.5" />
      <text x="200" y="245" textAnchor="middle" fontSize="11" fontWeight="600" fill="#10b981">C</text>

      <circle cx="80" cy="130" r="10" fill="white" stroke="#94a3b8" strokeWidth="2" />
      <text x="80" y="134" textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8">H</text>

      <circle cx="130" cy="40" r="10" fill="white" stroke="#94a3b8" strokeWidth="2" />
      <text x="130" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8">H</text>

      <circle cx="320" cy="130" r="10" fill="white" stroke="#94a3b8" strokeWidth="2" />
      <text x="320" y="134" textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8">H</text>

      <circle cx="270" cy="40" r="10" fill="white" stroke="#94a3b8" strokeWidth="2" />
      <text x="270" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8">H</text>

      <circle cx="140" cy="280" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
      <text x="140" y="284" textAnchor="middle" fontSize="10" fontWeight="600" fill="#10b981">OH</text>

      <circle cx="260" cy="280" r="12" fill="white" stroke="#10b981" strokeWidth="2" />
      <text x="260" y="284" textAnchor="middle" fontSize="10" fontWeight="600" fill="#10b981">NH</text>

      {/* Decorative rings */}
      <circle cx="340" cy="60" r="30" stroke="#e2e8f0" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      <circle cx="60" cy="260" r="20" stroke="#e2e8f0" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
    </svg>
  );
}
