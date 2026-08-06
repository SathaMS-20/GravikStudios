import { UserRound } from "lucide-react";
import { Reveal, RevealWords, SectionLabel } from "./Reveal";

export function Team() {
  return (
    <section id="careers" className="mx-auto max-w-7xl px-6 py-28 sm:py-40 lg:px-8">
      <SectionLabel>Team & careers</SectionLabel>
      <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-semibold text-balance-tight">
        <RevealWords text="The people behind Gravik." />
      </h2>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          We are assembling a small, senior team of designers, engineers, and artists. Roles
          open soon.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Reveal key={i} delay={i * 0.09} y={30}>
            <div className="group flex h-full flex-col items-start rounded-[1.5rem] border border-dashed border-border bg-card/60 p-8 transition-colors duration-700 hover:border-glow/40">
              <div className="grid size-12 shrink-0 place-items-center rounded-full border border-border bg-surface">
                <UserRound className="size-5 text-muted-foreground transition-colors duration-500 group-hover:text-glow" />
              </div>
              <div className="mt-6 text-base font-medium">Coming Soon</div>
              <div className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Open Role
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
