interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
