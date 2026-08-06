import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  type?: "button" | "submit";
  className?: string;
};

export function MagneticButton({
  children,
  href,
  variant = "solid",
  type = "button",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });
  const inner = {
    x: useTransform(x, (v) => v * 0.35),
    y: useTransform(y, (v) => v * 0.35),
  };

  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-input text-foreground hover:bg-accent/60";

  const content = (
    <>
      <motion.span style={inner} className="relative z-10 flex items-center gap-2">
        {children}
      </motion.span>
      <span
        aria-hidden
        className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120px circle at 50% 120%, color-mix(in oklab, var(--glow) 55%, transparent), transparent 70%)",
        }}
      />
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="group inline-block"
      onPointerMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
        my.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {href ? (
        <a href={href} className={`${base} ${styles} ${className}`}>
          {content}
        </a>
      ) : (
        <button type={type} className={`${base} ${styles} ${className}`}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
