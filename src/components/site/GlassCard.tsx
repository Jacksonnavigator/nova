import type { ReactNode } from "react";
import { motion } from "motion/react";

export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`glass rounded-xl p-6 relative overflow-hidden group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(4,107,210,0.08), transparent 40%)",
        }}
      />
      {children}
    </motion.div>
  );
}
