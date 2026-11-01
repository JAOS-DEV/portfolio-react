import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ReactElement } from "react";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/paths";

interface ProjectCardProps {
  project: Project;
}

const actionClass =
  "inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-violet-bright to-violet-deep px-4 text-sm font-semibold text-white hover:from-violet-deep hover:to-violet-bright sm:w-auto";

export function ProjectCard({ project }: ProjectCardProps): ReactElement {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_0_5px_1px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-video bg-violet-deep">
        <Image
          src={withBasePath(`/projects/${project.slug}.webp`)}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
        />
        {project.inProgress ? (
          <p className="absolute top-3 left-3 z-10 rounded-full bg-violet-deep px-3 py-1 text-xs font-semibold tracking-wide text-white">
            In progress
          </p>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-6 text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-background px-2.5 py-1 text-xs font-medium text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className={actionClass}
            >
              Live
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.appStoreUrl ? (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on the App Store`}
              className={actionClass}
            >
              App Store
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className={actionClass}
            >
              Code
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
