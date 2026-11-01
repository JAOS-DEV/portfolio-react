import type { ReactElement } from "react";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home(): ReactElement {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
