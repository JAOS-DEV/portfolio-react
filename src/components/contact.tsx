import { Mail } from "lucide-react";
import type { ReactElement } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { site } from "@/data/site";

const linkClass =
  "flex min-h-11 gap-3 rounded-2xl border border-line bg-card px-4 py-3 text-sm font-semibold text-foreground hover:border-violet-soft";

export function Contact(): ReactElement {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6" aria-labelledby="contact">
      <div className="fade-up rounded-3xl border border-line bg-background p-6 shadow-[0_0_5px_1px_rgba(0,0,0,0.12)] sm:p-10">
        <h2 id="contact" className="scroll-mt-24 text-3xl font-semibold tracking-tight">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          The fastest way to reach me is GitHub or LinkedIn.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="James O'Sullivan on GitHub"
              className={`${linkClass} items-center`}
            >
              <GithubIcon className="size-5 shrink-0" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="James O'Sullivan on LinkedIn"
              className={`${linkClass} items-center`}
            >
              <LinkedinIcon className="size-5 shrink-0" />
              LinkedIn
            </a>
          </li>
          <li>
            {site.contactEmail ? (
              <a href={`mailto:${site.contactEmail}`} aria-label="Email James O'Sullivan" className={`${linkClass} items-center`}>
                <Mail className="size-5 shrink-0" aria-hidden="true" />
                Email
              </a>
            ) : (
              <div className={`${linkClass} items-start`}>
                <Mail className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <span>
                  Email
                  <span className="mt-1 block text-xs font-medium text-muted">
                    TODO: add a public contact email
                  </span>
                </span>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
