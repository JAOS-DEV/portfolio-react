import Image from "next/image";
import type { ReactElement } from "react";
import { withBasePath } from "@/lib/paths";

const primaryLinkClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-violet-bright to-violet-deep px-5 text-sm font-semibold text-white shadow-[0_0_5px_1px_rgba(0,0,0,0.28)] hover:from-violet-deep hover:to-violet-bright sm:w-auto";

const secondaryLinkClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line bg-card px-5 text-sm font-semibold text-foreground hover:border-violet-soft sm:w-auto";

export function Hero(): ReactElement {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(89,29,185,0.43),rgba(89,29,185,0)_70%)] md:left-[18%] md:translate-x-0"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[16rem_minmax(0,1fr)] md:py-24">
        <div className="fade-up relative mx-auto w-52 sm:w-64 md:mx-0">
          <Image
            src={withBasePath("/profile.webp")}
            alt="James O'Sullivan, a man with short hair and glasses in a blue t-shirt, sitting outdoors at dusk"
            width={500}
            height={500}
            priority
            className="profile-blob aspect-square w-full object-cover object-[center_20%] shadow-[0_0_5px_1px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="fade-up text-center [animation-delay:120ms] md:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            James O&apos;Sullivan
            <span className="mt-3 block text-xl font-medium text-violet-deep sm:text-2xl dark:text-violet-soft">
              Full-stack TypeScript developer
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted md:mx-0">
            I build and ship production apps with Next.js, React and Postgres.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href="#work" className={primaryLinkClass}>
              View work
            </a>
            <a href="#contact" className={secondaryLinkClass}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
