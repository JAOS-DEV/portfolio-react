export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: readonly string[];
  /** Describes public/projects/<slug>.webp. Update this when the real screenshot replaces the placeholder. */
  imageAlt: string;
  liveUrl?: string;
  codeUrl?: string;
  inProgress?: boolean;
  /** Shown on the card until the missing links are filled in. */
  pending?: readonly string[];
}

export const projects: readonly Project[] = [
  {
    slug: "paid-talent",
    title: "Paid Talent",
    description:
      "A live, bilingual (EN/TH) job marketplace for Thailand's nightlife industry, with ID and liveness verification, admin review queues, chat that blocks contact details, and Stripe subscriptions.",
    tech: [
      "Next.js",
      "Auth.js",
      "Drizzle",
      "Postgres (Neon)",
      "Stripe",
      "Cloudflare R2",
      "next-intl",
      "Vitest",
      "Playwright",
    ],
    imageAlt: "Placeholder graphic for the Paid Talent screenshot",
    liveUrl: "https://paid-talent.vercel.app",
    codeUrl: "https://github.com/JAOS-DEV/paid-talent",
  },
  {
    slug: "wheres-my-bus",
    title: "Where's My Bus?",
    description:
      "Live London bus tracking from TfL open data, with route diagrams, early/late detection and ghost-bus spotting. Installable on any phone.",
    tech: ["Next.js", "React Query", "Leaflet", "PWA"],
    imageAlt: "Placeholder graphic for the Where's My Bus screenshot",
    liveUrl: "https://tfl-tracker-wine.vercel.app",
    codeUrl: "https://github.com/JAOS-DEV/tfl-tracker",
  },
  {
    slug: "giggauge",
    title: "GigGauge",
    description:
      "Work out what you need to earn and compare jobs, contracts and gig work like-for-like. Works offline, no account needed.",
    tech: ["React", "Vite", "Tailwind", "Recharts", "Zod", "Vitest", "PWA"],
    imageAlt: "Placeholder graphic for the GigGauge screenshot",
    liveUrl: "https://giggauge.vercel.app",
    codeUrl: "https://github.com/JAOS-DEV/GigGauge",
  },
  {
    slug: "shiftpal",
    title: "ShiftPal",
    description:
      "A shift, pay and legal-hours tracker for UK drivers, with an AI assistant that knows union rules. Available on the App Store.",
    tech: ["React", "Firebase", "Gemini"],
    imageAlt: "Placeholder graphic for the ShiftPal screenshot",
    liveUrl: "https://shiftpal.app",
    // TODO: add the App Store link.
    // TODO: add the source code link.
    pending: ["App Store link", "source code link"],
  },
  {
    slug: "venuboard",
    title: "VenuBoard",
    description:
      "A white-label website and management platform for venues, with multi-tenant subdomains.",
    tech: ["Next.js", "Supabase"],
    imageAlt: "Placeholder graphic for the VenuBoard screenshot",
    codeUrl: "https://github.com/JAOS-DEV/VenuBoard",
    inProgress: true,
  },
];
