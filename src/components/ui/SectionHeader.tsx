import { clsx } from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={clsx("mb-14", centered && "text-center max-w-3xl mx-auto")}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            light ? "text-blue-100" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
