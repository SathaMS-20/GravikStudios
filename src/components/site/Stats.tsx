import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { label: "Projects", value: 12, suffix: "" },
  { label: "Hours Invested", value: 9400, suffix: "+" },
  { label: "Coffee Cups", value: 2860, suffix: "" },
  { label: "Ideas Created", value: 340, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} y={24}>
            <div className="h-full bg-background px-7 py-10">
              <div className="text-[clamp(2rem,4vw,3rem)] leading-none font-semibold tracking-tight">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-xs tracking-[0.24em] text-muted-foreground uppercase">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
