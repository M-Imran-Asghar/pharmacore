import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import QualityShieldIllustration from "@/components/illustrations/QualityShieldIllustration";
import { CheckCircle2, FileCheck, ClipboardList, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description: "PharmaCore's commitment to GMP, ISO standards, and regulatory compliance across all manufacturing and clinical operations.",
};

const certifications = [
  { name: "ISO 9001:2015", body: "Quality Management Systems", status: "Active" },
  { name: "ISO 14001:2015", body: "Environmental Management", status: "Active" },
  { name: "GMP Certified", body: "FDA / EMA / WHO", status: "Active" },
  { name: "ICH Q10", body: "Pharmaceutical Quality System", status: "Active" },
  { name: "21 CFR Part 11", body: "Electronic Records Compliance", status: "Active" },
  { name: "EU GMP Annex 11", body: "Computerised Systems", status: "Active" },
];

const pillars = [
  {
    icon: FileCheck,
    title: "Documentation & SOPs",
    description:
      "Over 3,000 controlled SOPs govern every manufacturing, testing, and distribution process — reviewed annually.",
  },
  {
    icon: ClipboardList,
    title: "Audit & Inspection Readiness",
    description:
      "Continuous internal audit programs and mock inspections ensure we are always ready for regulatory agency visits.",
  },
  {
    icon: BarChart3,
    title: "Quality Metrics",
    description:
      "Real-time dashboards track batch release rates, deviation trends, CAPA closure rates, and customer complaint KPIs.",
  },
  {
    icon: CheckCircle2,
    title: "Supplier Qualification",
    description:
      "All raw material suppliers undergo rigorous qualification audits and ongoing performance monitoring.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Quality Is Not a Department — It Is a Culture"
        subtitle="Every process, every batch, every decision at PharmaCore is governed by an unwavering commitment to quality and patient safety."
      />

      {/* Shield + intro */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Certified to the Highest Global Standards
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              PharmaCore operates under a Pharmaceutical Quality System (PQS) aligned with
              ICH Q10 guidelines. Our facilities are regularly inspected by the FDA, EMA,
              and WHO — consistently receiving zero critical findings.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "0", label: "Critical FDA findings (5 yrs)" },
                { value: "99.8%", label: "Batch release rate" },
                { value: "100%", label: "CAPA on-time closure" },
                { value: "48h", label: "Avg. deviation resolution" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="text-2xl font-bold text-blue-700">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <QualityShieldIllustration className="w-64 h-auto" />
          </div>
        </div>
      </Section>

      {/* Quality pillars */}
      <Section background="light">
        <SectionHeader
          eyebrow="Quality System"
          title="Four Pillars of Our Quality Framework"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 flex gap-5">
              <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={22} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white">
        <SectionHeader
          eyebrow="Certifications"
          title="Our Regulatory Credentials"
          subtitle="Independently verified compliance with international pharmaceutical and quality standards."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map(({ name, body, status }) => (
            <div key={name} className="border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">{name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{body}</p>
                <span className="inline-block mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Questions About Our Quality Standards?"
        subtitle="Our quality and regulatory affairs team is available to answer inquiries from partners, auditors, and regulators."
        primaryLabel="Contact Quality Team"
        primaryHref="/contact"
        secondaryLabel="Download Quality Policy"
        secondaryHref="#"
      />
    </>
  );
}
