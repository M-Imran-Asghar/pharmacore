import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        {/* SVG illustration */}
        <svg viewBox="0 0 200 160" className="w-48 mx-auto mb-8" fill="none" aria-hidden="true">
          <circle cx="100" cy="80" r="60" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="100" cy="80" r="40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="100" y="90" textAnchor="middle" fontSize="36" fontWeight="800" fill="#1d4ed8">404</text>
          <circle cx="60" cy="40" r="8" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1.5" />
          <circle cx="145" cy="120" r="6" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
        </svg>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
