import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import aboutAbstract from "@/assets/about-abstract.jpg";
import { Reveal, RevealWords, SectionLabel } from "./Reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-40 lg:px-8">
      <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionLabel>About the studio</SectionLabel>
          <h2 className="mt-8 text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-semibold text-balance-tight">
            <RevealWords text="Games built with intent, not shortcuts." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              We build games that combine immersive gameplay, memorable worlds, and polished
              player experiences. Every project is crafted with creativity, technical
              excellence, and attention to detail.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {[
                { k: "Founded", v: "2024" },
                { k: "Platforms", v: "PC · Mobile" },
                { k: "Model", v: "Independent" },
              ].map((i) => (
                <div key={i.k} className="bg-surface px-5 py-6">
                  <div className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {i.k}
                  </div>
                  <div className="mt-2 text-lg font-medium">{i.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal y={40} delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-lift">
            <motion.img
              src={aboutAbstract}
              alt="Abstract sculptural render representing Gravik Studios' craft"
              width={1100}
              height={1300}
              loading="lazy"
              style={{ y: imgY, scale }}
              className="h-[26rem] w-full object-cover sm:h-[34rem]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,color-mix(in_oklab,var(--glow)_18%,transparent),transparent_60%)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
