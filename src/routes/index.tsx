import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Projects } from "@/components/site/Projects";
import { Stats } from "@/components/site/Stats";
import { Team } from "@/components/site/Team";
import { Technologies } from "@/components/site/Technologies";
import { Vision } from "@/components/site/Vision";
import { WhyGravik } from "@/components/site/WhyGravik";

const title = "Gravik Studios — Independent Game Development Studio";
const description =
  "Gravik Studios is an independent game development studio crafting immersive PC and mobile games with polished gameplay and memorable worlds.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Vision />
        <Technologies />
        <WhyGravik />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
