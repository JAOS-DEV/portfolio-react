import type { ReactElement } from "react";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinkClass =
  "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-foreground hover:text-violet-soft";

export function SiteHeader(): ReactElement {
  return (
    <header
      id="top"
      className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur-md pt-[env(safe-area-inset-top)]"
    >
      <div className="h-1 bg-gradient-to-r from-violet-deep via-violet-bright to-violet-hero" aria-hidden="true" />
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <a href="#top" className={`${navLinkClass} px-1 font-semibold tracking-tight`}>
          <span className="sm:hidden">James</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <a href="#work" className={navLinkClass}>
            Work
          </a>
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
