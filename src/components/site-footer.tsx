import type { ReactElement } from "react";
import { site } from "@/data/site";

export function SiteFooter(): ReactElement {
  return (
    <footer className="mt-auto border-t border-line px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-medium text-foreground hover:text-violet-soft"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
