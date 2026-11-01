import type { ReactElement } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const fadeDelayClass = [
  "[animation-delay:0ms]",
  "[animation-delay:80ms]",
  "[animation-delay:160ms]",
  "[animation-delay:240ms]",
  "[animation-delay:320ms]",
] as const;

export function Projects(): ReactElement {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6" aria-labelledby="work">
      <div className="fade-up max-w-2xl">
        <h2 id="work" className="scroll-mt-24 text-3xl font-semibold tracking-tight">
          Work
        </h2>
        <p className="mt-3 text-muted">
          Production apps and tools, from marketplaces and transit tracking to pay and venue software.
        </p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.slug} className={`fade-up ${fadeDelayClass[index] ?? ""}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
