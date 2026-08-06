import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { MagneticButton } from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const layerA = { x: useTransform(sx, [-1, 1], [-28, 28]), y: useTransform(sy, [-1, 1], [-18, 18]) };
  const layerB = { x: useTransform(sx, [-1, 1], [22, -22]), y: useTransform(sy, [-1, 1], [14, -14]) };
  const textShift = {
    x: useTransform(sx, [-1, 1], [-10, 10]),
    y: useTransform(sy, [-1, 1], [-6, 6]),
  };

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Floating gradients */}
      <motion.div
        style={layerA}
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[8%] size-[46rem] rounded-full opacity-55 blur-[120px] animate-drift"
      >
        <div className="size-full rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--glow)_45%,transparent),transparent_65%)]" />
      </motion.div>
      <motion.div
        style={layerB}
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[-20%] size-[40rem] rounded-full opacity-40 blur-[130px] animate-drift-slow"
      >
        <div className="size-full rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--foreground)_16%,transparent),transparent_65%)]" />
      </motion.div>

      {/* Particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 26 }).map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          return (
            <motion.span
              key={i}
              className="absolute size-[2px] rounded-full bg-foreground/45"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ y: [0, -26, 0], opacity: [0.1, 0.65, 0.1] }}
              transition={{
                duration: 7 + (i % 6),
                repeat: Infinity,
                delay: i * 0.24,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-24 lg:px-8"
      >
        <motion.div style={textShift}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.05, ease: EASE }}
            className="flex items-center gap-3 text-xs tracking-[0.28em] text-muted-foreground uppercase"
          >
            <span className="size-1.5 rounded-full bg-glow shadow-[0_0_16px_var(--glow)]" />
            Independent Game Studio
          </motion.div>

          <h1 className="mt-8 max-w-5xl text-[clamp(2.75rem,8vw,7rem)] leading-[0.94] font-semibold text-balance-tight">
            {["Crafting Worlds", "That Players Remember"].map((line, li) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.25, delay: 2.05 + li * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 2.45, ease: EASE }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Gravik Studios is an independent game development studio building immersive
            experiences for PC and mobile players.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6, ease: EASE }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects">Explore</MagneticButton>
            <MagneticButton href="#vision" variant="ghost">
              Our Vision
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
