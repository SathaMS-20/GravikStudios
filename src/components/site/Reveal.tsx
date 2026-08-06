import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  blur = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RevealWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.95, delay: i * 0.055, ease: EASE }}
          >
            {word}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
        <span className="h-px w-8 bg-border" />
        {children}
      </div>
    </Reveal>
  );
}
