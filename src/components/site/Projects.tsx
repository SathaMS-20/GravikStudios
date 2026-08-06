import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { Reveal, RevealWords, SectionLabel } from "./Reveal";

const projects = [
  {
    title: "Project Aether",
    genre: "Action Adventure",
    platform: "PC",
    status: "In Development",
    img: p1,
  },
  {
    title: "Hollow Drift",
    genre: "Puzzle Exploration",
    platform: "Mobile",
    status: "Prototyping",
    img: p2,
  },
  {
    title: "Velocity Nine",
    genre: "Arcade Racing",
    platform: "PC · Mobile",
    status: "Concept",
    img: p3,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-surface/40 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel>Featured projects</SectionLabel>
        <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-semibold text-balance-tight">
          <RevealWords text="Worlds currently in the making." />
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} y={40}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-700 hover:-translate-y-2 hover:border-glow/40 hover:shadow-glow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.genre} key art`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
                  />
                  <span className="glass absolute top-4 left-4 rounded-full px-3 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase">
                    {p.status}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.genre}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    <span>{p.platform}</span>
                    <span className="text-foreground/60 transition-colors duration-500 group-hover:text-foreground">
                      View →
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
