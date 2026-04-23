import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import DnaIllustration from "@/components/illustrations/DnaIllustration";
import LabProcessIllustration from "@/components/illustrations/LabProcessIllustration";
import { Brain, Cpu, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Development",
  description: "Discover how PharmaCore's R&D engine drives breakthrough drug discovery from target identification to clinical approval.",
};

const capabilities = [
  {
    icon: Brain,
    title: "Target Identification",
    description:
      "Using genomics, proteomics, and AI-driven analysis to identify and validate novel disease targets with high therapeutic potential.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Design",
    description:
      "Our proprietary ML platform screens billions of molecular configurations to identify optimal drug candidates in weeks, not years.",
  },
  {
    icon: Users,
    title: "Clinical Development",
    description:
      "Adaptive trial designs and decentralized clinical trials accelerate patient recruitment and data collection across global sites.",
  },
  {
    icon: TrendingUp,
    title: "Translational Science",
    description:
      "Bridging bench and bedside through biomarker-driven patient stratification and precision medicine approaches.",
  },
];

const therapeuticFocus = [
  { area: "Oncology", programs: 14, lead: "Dr. Priya Nair" },
  { area: "Cardiovascular", programs: 9, lead: "Dr. Robert Kim" },
  { area: "Neurology", programs: 7, lead: "Dr. Aiko Tanaka" },
  { area: "Immunology", programs: 5, lead: "Dr. Elena Vasquez" },
  { area: "Endocrinology", programs: 3, lead: "Dr. Marcus Webb" },
  { area: "Respiratory", programs: 2, lead: "Dr. Fatima Al-Hassan" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Development"
        title="Where Science Meets Innovation"
        subtitle="Our 1,200-strong R&D team operates across 8 global research centers, pursuing the next generation of breakthrough therapies."
      />

      {/* Capabilities */}
      <Section background="white">
        <SectionHeader
          eyebrow="Our Capabilities"
          title="End-to-End Drug Development"
          subtitle="From molecule to medicine, we own the full development value chain."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={22} className="text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* DNA + Process illustration */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <DnaIllustration className="w-40 h-auto" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
              Genomics Platform
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Precision Medicine at Scale
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              Our genomics and proteomics platform processes over 2 million data points per
              compound candidate, enabling us to predict efficacy and safety profiles with
              unprecedented accuracy before entering clinical trials.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2M+", label: "Data points per candidate" },
                { value: "85%", label: "Prediction accuracy" },
                { value: "3x", label: "Faster than industry avg." },
                { value: "40%", label: "Reduction in trial failures" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-slate-100">
                  <div className="text-2xl font-bold text-blue-700">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Lab process */}
      <Section background="white">
        <SectionHeader
          eyebrow="Development Process"
          title="Our Four-Stage Development Model"
        />
        <LabProcessIllustration className="w-full max-w-3xl mx-auto mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Synthesis", desc: "Medicinal chemistry and compound library generation" },
            { step: "02", title: "Separation", desc: "Purification and structural characterization" },
            { step: "03", title: "Analysis", desc: "In vitro and in vivo efficacy and safety profiling" },
            { step: "04", title: "Formulation", desc: "Dosage form development and stability testing" },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-black text-blue-100 mb-2">{step}</div>
              <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Therapeutic focus */}
      <Section background="light">
        <SectionHeader
          eyebrow="Therapeutic Focus"
          title="Where We Are Investing"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {therapeuticFocus.map(({ area, programs, lead }) => (
            <div key={area} className="bg-white rounded-2xl p-5 border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900">{area}</h3>
                <span className="text-2xl font-bold text-blue-700">{programs}</span>
              </div>
              <p className="text-xs text-slate-400">Programs</p>
              <p className="text-xs text-slate-500 mt-2">
                <span className="font-medium">Lead:</span> {lead}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Collaborate With Our Scientists"
        subtitle="We welcome academic partnerships, licensing discussions, and co-development opportunities."
        primaryLabel="Research Partnerships"
        primaryHref="/contact"
        secondaryLabel="View Pipeline"
        secondaryHref="/products"
      />
    </>
  );
}
