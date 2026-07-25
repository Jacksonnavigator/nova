import type { ReactNode } from "react";
import { motion } from "motion/react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-28 pb-16"
    >
      {children}
    </motion.main>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 text-center mb-16">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-md bg-[#f0f5fa] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
          {eyebrow}
        </div>
      )}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight">{title}</h1>
      {description && (
        <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </section>
  );
}
