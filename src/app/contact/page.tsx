import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/content";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PharmaCore for medical inquiries, partnerships, investor relations, or general information.",
};

const departments = [
  { name: "Medical Affairs", email: "medical@pharmacore.com" },
  { name: "Investor Relations", email: "investors@pharmacore.com" },
  { name: "Media & Press", email: "press@pharmacore.com" },
  { name: "Partnerships & Licensing", email: "partnerships@pharmacore.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let Us Start a Conversation"
        subtitle="Whether you are a healthcare professional, investor, researcher, or patient — we are here to help."
      />

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company or institution"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Inquiry Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Select a topic</option>
                  <option>Medical Information</option>
                  <option>Partnership / Licensing</option>
                  <option>Investor Relations</option>
                  <option>Media Inquiry</option>
                  <option>Careers</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: siteConfig.address },
                  { icon: Phone, label: "Phone", value: siteConfig.phone },
                  { icon: Mail, label: "Email", value: siteConfig.email },
                  { icon: Clock, label: "Hours", value: "Monday – Friday, 8:00 AM – 6:00 PM EST" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-blue-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</p>
                      <p className="text-sm text-slate-700 mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department contacts */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Department Contacts</h3>
              <div className="space-y-3">
                {departments.map(({ name, email }) => (
                  <div key={name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">{name}</span>
                    <a href={`mailto:${email}`} className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-400">1200 Innovation Drive, Boston, MA</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
