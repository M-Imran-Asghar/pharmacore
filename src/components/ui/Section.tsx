import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark" | "gradient";
}

const backgrounds = {
  white: "bg-white",
  light: "bg-slate-50",
  dark: "bg-slate-900 text-white",
  gradient: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white",
};

export default function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx("py-20 px-4 sm:px-6 lg:px-8", backgrounds[background], className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
