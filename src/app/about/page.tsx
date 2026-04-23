import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/content";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about PharmaCore's mission, history, and the team driving pharmaceutical innovation.",
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To discover, develop, and deliver innovative medicines that address unmet medical needs and improve quality of life for patients worldwide.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A world where every patient has access to safe, effective, and affordable medicines — regardless of geography or circumstance.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, scientific rigor, patient centricity, and a relentless commitment to quality guide every decision we make.",
  },
];

const leadership = [
  { name: "Dr. James Harrington", role: "Chief Executive Officer", tenure: "Since 2015" },
  { name: "Dr. Priya Nair", role: "Chief Scientific Officer", tenure: "Since 2018" },
  { name: "Michael Torres", role: "Chief Financial Officer", tenure: "Since 2019" },
  { name: "Dr. Aiko Tanaka", role: "Chief Medical Officer", tenure: "Since 2017" },
  { name: "Sarah Okonkwo", role: "Chief Operating Officer", tenure: "Since 2020" },
  { name: "Dr. Luca Ferretti", role: "VP, Regulatory Affairs", tenure: "Since 2016" },
];

const milestones = [
  { year: "1998", event: "Founded in Boston, MA with a focus on cardiovascular research" },
  { year: "2003", event: "First FDA-approved product: CardioMax 5mg" },
  { year: "2008", event: "Expanded into oncology with acquisition of BioTarget Inc." },
  { year: "2013", event: "Opened European headquarters in Basel, Switzerland" },
  { year: "2018", event: "Launched AI-driven drug discovery platform" },
  { year: "2023", event: "Reached 4,200 employees across 60+ countries" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PharmaCore"
        title="25 Years of Scientific Excellence"
        subtitle="From a small Boston lab to a global pharmaceutical leader — our story is one of relentless curiosity and patient-first purpose."
      />

      {/* Stats */}
      <Section background="white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: siteConfig.founded, label: "Year Founded" },
            { value: siteConfig.employees, label: "Employees Worldwide" },
            { value: siteConfig.countries, label: "Countries Served" },
            { value: siteConfig.patents, label: "Patents Filed" },
          ].map(({ value, label }) => (
            <div key={label} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-bold text-blue-700 mb-1">{value}</div>
              <div className="text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission / Vision / Values */}
      <Section background="light">
        <SectionHeader
          eyebrow="Our Purpose"
          title="What Drives Us Every Day"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-blue-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <SectionHeader
          eyebrow="Our Journey"
          title="Key Milestones"
          subtitle="Two and a half decades of breakthroughs, partnerships, and patient impact."
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-500 to-blue-600" />
          <div className="space-y-12">
            {milestones.map(({ year, event }, index) => (
              <div key={year} className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-bold text-white">{year.slice(2)}</span>
                </div>
                <div className="pt-3 flex-1">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-lg font-bold text-blue-700 mb-2 block">{year}</span>
                    <p className="text-slate-700 leading-relaxed">{event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section background="light">
        <SectionHeader
          eyebrow="Leadership"
          title="The Team Behind the Science"
          subtitle="Experienced leaders with deep expertise across pharma, biotech, and regulatory affairs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map(({ name, role, tenure }) => (
            <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">
                  {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">{name}</h3>
                <p className="text-xs text-blue-700 font-medium mt-0.5">{role}</p>
                <p className="text-xs text-slate-400 mt-1">{tenure}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Join Our Mission"
        subtitle="We are always looking for passionate scientists, clinicians, and business leaders to join our team."
        primaryLabel="View Open Roles"
        primaryHref="/careers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
