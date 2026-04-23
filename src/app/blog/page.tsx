import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { blogPosts } from "@/lib/content";
import { Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Thought leadership, clinical updates, and industry perspectives from the PharmaCore team.",
};

const categories = ["All", "Oncology", "Innovation", "Compliance", "Clinical", "Regulatory"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Knowledge From the Front Lines of Pharma"
        subtitle="Expert perspectives on drug development, regulatory trends, and the science shaping tomorrow's medicines."
      />

      <Section background="white">
        {/* Category filter — static for now, can be made interactive with client component */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
            >
              {/* Decorative header */}
              <div className="h-3 bg-gradient-to-r from-blue-600 to-emerald-500" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="blue">{post.category}</Badge>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <User size={12} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-10 text-center border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Stay Informed</h3>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest research updates, regulatory news, and company announcements.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
