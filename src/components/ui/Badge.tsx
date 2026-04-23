import { clsx } from "clsx";

type BadgeVariant = "green" | "blue" | "amber" | "gray";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  green: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  blue: "bg-blue-50 text-blue-700 ring-blue-600/20",
  amber: "bg-amber-50 text-amber-700 ring-amber-600/20",
  gray: "bg-slate-50 text-slate-700 ring-slate-600/20",
};

export default function Badge({ children, variant = "blue" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}
