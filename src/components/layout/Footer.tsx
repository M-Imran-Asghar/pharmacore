import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M12 2L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 2z" fill="white" opacity="0.9" />
                  <path d="M9 12l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn" },
                { label: "Twitter" },
                { label: "YouTube" },
              ].map(({ label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapeutic Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Therapeutic Areas
            </h3>
            <ul className="space-y-2.5">
              {["Cardiovascular", "Oncology", "Neurology", "Immunology", "Endocrinology", "Respiratory"].map((area) => (
                <li key={area}>
                  <Link
                    href="/products"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-emerald-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-emerald-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
