import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { MagneticButton } from "./MagneticButton";
import { Reveal, RevealWords, SectionLabel } from "./Reveal";

const socials = [
  { label: "GitHub", Icon: Github, href: "https://github.com" },
  { label: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com" },
  { label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { label: "Discord", Icon: MessageCircle, href: "https://discord.com" },
];

const field =
  "w-full rounded-xl border border-input bg-surface/70 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-glow/50 focus:outline-none focus:ring-2 focus:ring-ring";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative bg-surface/40 py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-8 text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-semibold text-balance-tight">
            <RevealWords text="Let's build something worth remembering." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Partnerships, publishing, press, or portfolios — reach out and we will get back
              to you.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid size-12 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-500 hover:-translate-y-1 hover:border-glow/40 hover:text-foreground"
                >
                  <s.Icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal y={40} delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                (e.target as HTMLFormElement).reset();
                toast.success("Message sent", {
                  description: "Thanks for reaching out — we'll reply shortly.",
                });
              }, 700);
            }}
            className="rounded-[1.75rem] border border-border bg-card p-7 shadow-lift sm:p-10"
          >
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={`mt-2 ${field}`} />
              </div>
              <div>
                <label htmlFor="email" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@studio.com"
                  className={`mt-2 ${field}`}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project"
                  className={`mt-2 resize-none ${field}`}
                />
              </div>
              <div className="pt-2">
                <MagneticButton type="submit" className="w-full px-10 py-4 text-base sm:w-auto">
                  {sending ? "Sending…" : "Send"}
                </MagneticButton>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
