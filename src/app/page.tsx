import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import LabProcessIllustration from "@/components/illustrations/LabProcessIllustration";
import { products, blogPosts } from "@/lib/content";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "PharmaCore | Advancing Health Through Science",
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection />
      <FeaturesSection />

      {/* Testimonials */}
      <Section background="white">
        <SectionHeader
          eyebrow="Trusted by Healthcare Professionals"
          title="What Experts Say About Us"
          subtitle="Hear from leading physicians and researchers who rely on PharmaCore medicines."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "PharmaCore's CardioMax has revolutionized hypertension treatment in my practice. The improved bioavailability means better patient compliance and outcomes.",
              author: "Dr. Emily Rodriguez",
              title: "Cardiologist, Boston Medical Center",
              avatar: "ER"
            },
            {
              quote: "The quality and consistency of PharmaCore's oncology portfolio is unmatched. Their targeted therapies have given my patients hope where there was none.",
              author: "Dr. James Chen",
              title: "Oncologist, Memorial Sloan Kettering",
              avatar: "JC"
            },
            {
              quote: "As a researcher, I'm impressed by PharmaCore's commitment to evidence-based medicine. Their clinical trial transparency sets the industry standard.",
              author: "Dr. Sarah Williams",
              title: "Clinical Researcher, NIH",
              avatar: "SW"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Products preview */}
      <Section background="white">
        <SectionHeader
          eyebrow="Our Portfolio"
          title="Medicines That Matter"
          subtitle="From approved therapies to late-stage pipeline candidates, our portfolio addresses unmet medical needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant={product.status === "Approved" ? "green" : "amber"}>
                  {product.status}
                </Badge>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg group-hover:text-blue-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{product.description}</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-400 mb-3">
                  <span className="font-medium text-slate-600">Indication:</span> {product.indication}
                </p>
                <Button href={`/products#${product.id}`} variant="outline" size="sm" className="w-full group-hover:bg-blue-50">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/products" variant="outline">
            View Full Portfolio <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* R&D Process */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
                Research Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                From Discovery to Patient
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our integrated drug development pipeline spans synthesis, preclinical testing,
                clinical trials, and regulatory approval — all under one roof.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Success Rate", value: "85%", desc: "Phase I to Approval" },
                { label: "Time to Market", value: "4.2 years", desc: "Average development" },
                { label: "Active Trials", value: "47", desc: "Ongoing studies" },
                { label: "Publications", value: "320+", desc: "Peer-reviewed papers" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.desc}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "AI-assisted target identification",
                "High-throughput compound screening",
                "Adaptive clinical trial design",
                "Accelerated regulatory pathways",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/research">
              Explore R&D <ArrowRight size={16} />
            </Button>
          </div>
          <LabProcessIllustration className="w-full max-w-lg mx-auto" />
        </div>
      </Section>

      {/* Blog preview */}
      <Section background="white">
        <SectionHeader
          eyebrow="Latest Insights"
          title="From Our Experts"
          subtitle="Thought leadership, clinical updates, and industry perspectives from the PharmaCore team."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Badge variant="blue" className="mb-3">{post.category}</Badge>
              <h3 className="font-semibold text-slate-900 mt-3 mb-2 leading-snug text-lg group-hover:text-blue-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <Button href={`/blog/${post.slug}`} variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                  Read More <ArrowRight size={14} />
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Button href="/blog" variant="outline">
            Read All Articles <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
