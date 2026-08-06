import { motion } from "motion/react";
import {
  Boxes,
  Brush,
  Code2,
  Cpu,
  GitBranch,
  Gamepad2,
  Layers,
} from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const tech = [
  { name: "Unity", Icon: Gamepad2 },
  { name: "Unreal Engine", Icon: Layers },
  { name: "Blender", Icon: Boxes },
  { name: "Substance Painter", Icon: Brush },
  { name: "Git", Icon: GitBranch },
  { name: "C#", Icon: Code2 },
  { name: "C++", Icon: Cpu },
];

export function Technologies() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <SectionLabel>Technologies</SectionLabel>
      <div className="mt-12 flex flex-wrap gap-4">
        {tech.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06} y={20}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors duration-500 hover:border-glow/40"
            >
              <t.Icon className="size-5 text-muted-foreground transition-colors duration-500 group-hover:text-glow" />
              <span className="text-sm font-medium">{t.name}</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
