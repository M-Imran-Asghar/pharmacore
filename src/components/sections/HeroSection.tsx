import Button from "@/components/ui/Button";
import MoleculeIllustration from "@/components/illustrations/MoleculeIllustration";
import { ArrowRight, FlaskConical, Globe, Award, ShieldCheck } from "lucide-react";

const stats = [
  { icon: FlaskConical, value: "320+", label: "Patents Filed" },
  { icon: Globe, value: "60+", label: "Countries" },
  { icon: Award, value: "25+", label: "Years of Excellence" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-blue-200">
                  Advancing Global Health Since 1998
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Science That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-pulse">
                  Transforms
                </span>{" "}
                Lives
              </h1>

              <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
                PharmaCore develops breakthrough medicines across oncology, cardiovascular,
                and neurology — bringing hope to patients in over 60 countries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/products" size="lg" className="group">
                Explore Products{" "}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/research" variant="outline" size="lg"
                className="border-blue-400/50 text-blue-200 hover:bg-blue-900/40 hover:text-white">
                Our Research
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-blue-200/60">
                <ShieldCheck size={16} />
                <span className="text-sm">FDA Approved</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200/60">
                <Award size={16} />
                <span className="text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200/60">
                <Globe size={16} />
                <span className="text-sm">60+ Countries</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl scale-110 animate-pulse" />
              <MoleculeIllustration className="w-full max-w-md relative z-10 drop-shadow-2xl animate-float" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-16 border-t border-white/10">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon size={18} className="text-emerald-400 mb-1 mx-auto" />
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-blue-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
