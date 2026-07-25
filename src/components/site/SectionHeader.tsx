import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <div
      className={`mb-12 flex flex-col gap-6 ${
        centered ? "text-center items-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-slate-900 normal-case tracking-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className={`mt-4 text-base sm:text-lg text-slate-600 leading-relaxed ${centered ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
