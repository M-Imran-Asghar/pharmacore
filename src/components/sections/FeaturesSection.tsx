import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { FlaskConical, ShieldCheck, Globe2, Microscope, HeartPulse, Leaf } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Innovative R&D",
    description:
      "Our 1,200-strong research team drives discovery across six therapeutic areas using AI-assisted drug design.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "ISO 9001 and GMP-certified facilities ensure every product meets the highest global safety standards.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Distribution networks spanning 60+ countries ensure patients worldwide have access to our medicines.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Microscope,
    title: "Clinical Excellence",
    description:
      "Rigorous Phase I–III trials with transparent reporting and patient-centric trial design.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: HeartPulse,
    title: "Patient Focus",
    description:
      "Every decision is guided by patient outcomes — from molecule design to post-market surveillance.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Carbon-neutral manufacturing targets by 2030, with green chemistry principles embedded in our processes.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export default function FeaturesSection() {
  return (
    <Section background="light">
      <SectionHeader
        eyebrow="Why PharmaCore"
        title="Built on Science, Driven by Purpose"
        subtitle="We combine cutting-edge research with operational excellence to deliver medicines that make a measurable difference."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, description, color, bg }, index) => (
          <div
            key={title}
            className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={24} className={color} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-3 text-lg group-hover:text-blue-700 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
