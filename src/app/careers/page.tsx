import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { careers } from "@/lib/content";
import { MapPin, Briefcase, ArrowRight, Zap, Users, TrendingUp, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join PharmaCore and help us develop the next generation of life-changing medicines. Explore open roles.",
};

const perks = [
  { icon: Zap, title: "Cutting-Edge Science", desc: "Work on programs that push the boundaries of what medicine can do." },
  { icon: Users, title: "Collaborative Culture", desc: "Cross-functional teams where every voice shapes the outcome." },
  { icon: TrendingUp, title: "Career Growth", desc: "Structured development programs, mentorship, and global mobility." },
  { icon: Heart, title: "Comprehensive Benefits", desc: "Health, dental, vision, 401k match, parental leave, and more." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the Future of Medicine With Us"
        subtitle="Join 4,200+ scientists, clinicians, and innovators working to improve lives across the globe."
      />

      {/* Culture */}
      <Section background="white">
        <SectionHeader
          eyebrow="Why PharmaCore"
          title="A Place Where Science and Purpose Meet"
          subtitle="We believe the best science happens when talented people are empowered, supported, and inspired."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-blue-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Job listings */}
      <Section background="light">
        <SectionHeader
          eyebrow="Open Positions"
          title="Current Opportunities"
          subtitle="We are actively hiring across research, clinical, regulatory, and commercial functions."
        />
        <div className="space-y-4 max-w-4xl mx-auto">
          {careers.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Briefcase size={12} /> {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin size={12} /> {job.location}
                    </span>
                    <Badge variant="blue">{job.type}</Badge>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors shrink-0">
                  Apply Now <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm mb-4">
            Do not see a role that fits? We are always interested in exceptional talent.
          </p>
          <a
            href="mailto:careers@pharmacore.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            Send us your CV <ArrowRight size={15} />
          </a>
        </div>
      </Section>

      <CtaSection
        title="Ready to Make an Impact?"
        subtitle="Join a team where your work directly contributes to improving patient lives around the world."
        primaryLabel="Browse All Roles"
        primaryHref="#"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}
