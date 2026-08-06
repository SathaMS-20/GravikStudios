import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, RevealWords, SectionLabel } from "./Reveal";

const items = [
  {
    title: "Vision",
    body: "Build a studio known for worlds that stay with players long after the credits.",
  },
  {
    title: "Innovation",
    body: "Explore new mechanics and technology instead of repeating familiar formulas.",
  },
  {
    title: "Gameplay",
    body: "Feel comes first. Every system is tuned until it is satisfying to touch.",
  },
  {
    title: "Quality",
    body: "Ship polished, performant builds. Details are the product, not the extra.",
  },
  {
    title: "Community",
    body: "Develop in the open, listen carefully, and grow alongside our players.",
  },
];

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="vision" className="mx-auto max-w-7xl px-6 py-28 sm:py-40 lg:px-8">
      <SectionLabel>Studio vision</SectionLabel>
      <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-semibold text-balance-tight">
        <RevealWords text="The principles behind every build." />
      </h2>

      <div ref={ref} className="relative mt-20 pl-8 sm:pl-16">
        <div className="absolute top-0 left-1.5 h-full w-px bg-border sm:left-[2.1rem]" />
        <motion.div
          style={{ height }}
          className="absolute top-0 left-1.5 w-px bg-gradient-to-b from-foreground to-glow sm:left-[2.1rem]"
        />

        <div className="flex flex-col gap-16 sm:gap-24">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.05} y={36}>
              <div className="relative">
                <span className="absolute top-3 -left-[1.72rem] size-2.5 rounded-full bg-foreground shadow-[0_0_18px_color-mix(in_oklab,var(--glow)_70%,transparent)] sm:-left-[2.35rem]" />
                <div className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                  {it.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
