// Central content store — replace with CMS (Sanity/Strapi) API calls in production

export const siteConfig = {
  name: "PharmaCore",
  tagline: "Advancing Health Through Science",
  description:
    "PharmaCore is a global pharmaceutical company dedicated to developing innovative medicines that improve patient outcomes worldwide.",
  email: "info@pharmacore.com",
  phone: "+1 (800) 742-6374",
  address: "1200 Innovation Drive, Boston, MA 02110, USA",
  founded: "1998",
  employees: "4,200+",
  countries: "60+",
  patents: "320+",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "R&D", href: "/research" },
  { label: "Quality", href: "/quality" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const products = [
  {
    id: "cardiomax",
    name: "CardioMax 10mg",
    category: "Cardiovascular",
    description:
      "Next-generation ACE inhibitor for hypertension management with improved bioavailability.",
    status: "Approved",
    indication: "Hypertension, Heart Failure",
  },
  {
    id: "neurozen",
    name: "NeuroZen 25mg",
    category: "Neurology",
    description:
      "Selective serotonin modulator for treatment-resistant depression with minimal side effects.",
    status: "Approved",
    indication: "Major Depressive Disorder",
  },
  {
    id: "oncoshield",
    name: "OncoShield IV",
    category: "Oncology",
    description:
      "Targeted monoclonal antibody therapy for non-small cell lung cancer.",
    status: "Phase III",
    indication: "NSCLC",
  },
  {
    id: "immunoboost",
    name: "ImmunoBoost",
    category: "Immunology",
    description: "Biologic therapy for moderate-to-severe rheumatoid arthritis.",
    status: "Approved",
    indication: "Rheumatoid Arthritis",
  },
  {
    id: "diabecare",
    name: "DiabeCare XR",
    category: "Endocrinology",
    description:
      "Extended-release GLP-1 receptor agonist for type 2 diabetes management.",
    status: "Approved",
    indication: "Type 2 Diabetes",
  },
  {
    id: "respiclear",
    name: "RespiClear",
    category: "Respiratory",
    description: "Dual bronchodilator for COPD with 24-hour sustained release.",
    status: "Phase II",
    indication: "COPD, Asthma",
  },
];

export const blogPosts = [
  {
    id: "1",
    slug: "future-of-targeted-therapy",
    title: "The Future of Targeted Cancer Therapy",
    excerpt:
      "How precision medicine is reshaping oncology treatment protocols and improving patient survival rates.",
    date: "2025-05-15",
    author: "Dr. Sarah Chen",
    category: "Oncology",
    readTime: "6 min",
  },
  {
    id: "2",
    slug: "ai-drug-discovery",
    title: "AI-Driven Drug Discovery: From Lab to Market",
    excerpt:
      "Exploring how machine learning models are accelerating the identification of novel drug candidates.",
    date: "2025-04-28",
    author: "Dr. Marcus Webb",
    category: "Innovation",
    readTime: "8 min",
  },
  {
    id: "3",
    slug: "gmp-compliance-2025",
    title: "GMP Compliance in 2025: What Has Changed",
    excerpt:
      "A comprehensive review of updated Good Manufacturing Practice guidelines and their operational impact.",
    date: "2025-04-10",
    author: "Elena Vasquez",
    category: "Compliance",
    readTime: "5 min",
  },
];

export const careers = [
  {
    id: "1",
    title: "Senior Research Scientist - Oncology",
    department: "R&D",
    location: "Boston, MA",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Regulatory Affairs Manager",
    department: "Regulatory",
    location: "Washington, DC",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Clinical Data Analyst",
    department: "Clinical Operations",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "4",
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "San Diego, CA",
    type: "Full-time",
  },
  {
    id: "5",
    title: "Medical Science Liaison",
    department: "Medical Affairs",
    location: "Chicago, IL",
    type: "Full-time",
  },
];
