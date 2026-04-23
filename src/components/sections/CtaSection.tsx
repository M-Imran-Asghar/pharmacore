import Button from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Award, Globe } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaSection({
  title = "Ready to Partner With Us?",
  subtitle = "Whether you are a healthcare provider, investor, or research institution — we would love to connect.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "View Careers",
  secondaryHref = "/careers",
}: CtaSectionProps) {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-float delay-1000" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primaryHref} size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            {primaryLabel} <ArrowRight size={18} />
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg"
            className="border-white/50 text-white hover:bg-white/10 hover:border-white/70 backdrop-blur-sm">
            {secondaryLabel}
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200/80">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span className="text-sm">FDA Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} />
            <span className="text-sm">Industry Leader</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span className="text-sm">Global Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
