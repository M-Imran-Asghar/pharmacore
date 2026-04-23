import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { products } from "@/lib/content";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore PharmaCore's portfolio of approved medicines and pipeline candidates across six therapeutic areas.",
};

const pipeline = [
  { phase: "Discovery", count: 12, color: "bg-slate-200" },
  { phase: "Preclinical", count: 8, color: "bg-blue-200" },
  { phase: "Phase I", count: 5, color: "bg-blue-400" },
  { phase: "Phase II", count: 4, color: "bg-blue-600" },
  { phase: "Phase III", count: 2, color: "bg-blue-800" },
  { phase: "Approved", count: 9, color: "bg-emerald-500" },
];

function statusVariant(status: string): "green" | "amber" | "blue" {
  if (status === "Approved") return "green";
  if (status === "Phase III") return "amber";
  return "blue";
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Portfolio"
        title="Medicines for the World's Greatest Health Challenges"
        subtitle="Our portfolio spans approved therapies and a robust pipeline across cardiovascular, oncology, neurology, and more."
      />

      {/* Pipeline overview */}
      <Section background="light">
        <SectionHeader
          eyebrow="Pipeline Overview"
          title="Our Development Pipeline"
          subtitle="40 active programs across all stages of development."
        />
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {pipeline.map(({ phase, count, color }) => (
            <div key={phase} className="text-center">
              <div className={`${color} rounded-xl h-24 flex items-center justify-center mb-3`}>
                <span className="text-2xl font-bold text-white drop-shadow">{count}</span>
              </div>
              <p className="text-xs font-medium text-slate-600">{phase}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Products grid */}
      <Section background="white">
        <SectionHeader
          eyebrow="Our Products"
          title="Approved & Late-Stage Portfolio"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <FlaskConical size={20} className="text-blue-700" />
                </div>
                <Badge variant={statusVariant(product.status)}>{product.status}</Badge>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                {product.category}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{product.description}</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-600">Indication: </span>
                  {product.indication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Interested in Our Pipeline?"
        subtitle="Contact our medical affairs team for scientific information, partnership opportunities, or licensing inquiries."
        primaryLabel="Contact Medical Affairs"
        primaryHref="/contact"
        secondaryLabel="View R&D"
        secondaryHref="/research"
      />
    </>
  );
}
