# James O'Sullivan — portfolio

Personal site for James O'Sullivan, a full-stack TypeScript developer. It is a static [Next.js](https://nextjs.org/) 16 app (App Router, TypeScript, Tailwind CSS 4) published with GitHub Pages at [jaos-dev.github.io/portfolio-react](https://jaos-dev.github.io/portfolio-react).

## Run it

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000/portfolio-react](http://localhost:3000/portfolio-react). The `/portfolio-react` prefix matches the GitHub Pages project path.

## Build the static site

```bash
npm run build
```

Next.js writes the export to `out/`. Asset URLs include `/portfolio-react`, so serve that folder under the same prefix:

```bash
# macOS / Linux
mkdir -p preview
ln -sfn "$(pwd)/out" preview/portfolio-react
npx serve preview
```

```powershell
# Windows
New-Item -ItemType Directory -Force preview | Out-Null
cmd /c mklink /J preview\portfolio-react out
npx serve preview
```

Then open [http://localhost:3000/portfolio-react/](http://localhost:3000/portfolio-react/).

## Deploy

`.github/workflows/deploy.yml` builds the static export and deploys it to GitHub Pages. The workflow runs on pushes to `main` only, so other branches do not change the live site.

When you are ready for this version to replace the current site:

1. Merge into `main`.
2. In the repository settings, set Pages → Build and deployment → Source to **GitHub Actions**.

Until that source is GitHub Actions, the existing `gh-pages` branch keeps serving the current site.

## Edit the content

Project copy, tech lists and links live in `src/data/projects.ts`. Put screenshots at `public/projects/<slug>.webp` (`paid-talent`, `wheres-my-bus`, `giggauge`, `shiftpal`, `venuboard`). The files there now are placeholders.

Still to fill in:

- Real project screenshots, and the matching `imageAlt` text in `src/data/projects.ts`
- A public contact email on `site.contactEmail` in `src/data/site.ts`
- ShiftPal App Store and source code links
