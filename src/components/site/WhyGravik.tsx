import {
  Gauge,
  Layers3,
  Palette,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, RevealWords, SectionLabel } from "./Reveal";

const reasons = [
  { title: "Player First", body: "Design decisions start from how it feels to play.", Icon: Users },
  { title: "Optimized Performance", body: "Stable frame rates across PC and mobile targets.", Icon: Gauge },
  { title: "Creative Design", body: "Distinct art direction over safe, generic visuals.", Icon: Palette },
  { title: "High Quality Assets", body: "Production-grade models, textures, and audio.", Icon: Sparkles },
  { title: "Immersive Gameplay", body: "Systems that pull players deeper, loop after loop.", Icon: Rocket },
  { title: "Scalable Architecture", body: "Codebases built to grow without breaking.", Icon: Layers3 },
];

export function WhyGravik() {
  return (
    <section className="relative bg-surface/40 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel>Why Gravik</SectionLabel>
        <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-semibold text-balance-tight">
          <RevealWords text="How we approach the work." />
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} y={34}>
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-border bg-card p-8 transition-all duration-700 hover:-translate-y-1.5 hover:border-glow/40">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(320px circle at 20% 0%, color-mix(in oklab, var(--glow) 14%, transparent), transparent 70%)",
                  }}
                />
                <r.Icon className="relative size-6 text-glow" />
                <h3 className="relative mt-6 text-lg font-medium tracking-tight">{r.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
