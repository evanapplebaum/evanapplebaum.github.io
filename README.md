# evanapplebaum.github.io

Personal portfolio, built with [Astro](https://astro.build). Content lives in Markdown and one config file; pushing to `main` rebuilds and deploys the site automatically.

## Where things live

| To change… | Edit |
|---|---|
| Hero text, About paragraphs, skills, contact info | `src/site.config.ts` |
| A project (card + detail page) | `src/content/projects/<slug>/index.md` |
| A project's photos | Drop them in that same folder, reference as `./photo.jpg` |
| Headshot | `src/assets/headshot.jpeg` |
| Colors / fonts | `src/styles/global.css` (the `:root` variables) |
| Layout of the home page / detail pages | `src/pages/index.astro`, `src/pages/projects/[slug].astro` |

Text fields in `site.config.ts` and challenge bodies support inline Markdown: `**bold**`, `*italic*`, `[link](https://...)`.

## Add a project

```bash
npm run new -- quadruped-cv
```

That creates `src/content/projects/quadruped-cv/` with an `index.md` (every field commented) and a placeholder `cover.svg`. Drop your photo in the folder, point `cover` at it, fill in the frontmatter, set `draft: false`, and push.

- **Card only:** fill `title`, `summary`, `cover`, `tags`, `order`.
- **Full detail page:** add `detail: true`. Every other section (stats, specs, gallery, challenges) appears only if you fill it in. `skateboard/index.md` uses all of them as a reference.
- **Order on the home page:** lower `order` shows first.
- **Hide something without deleting it:** `draft: true`.

Photos can be full-resolution straight off your phone. The build resizes them and converts to WebP automatically.

## Preview locally

```bash
npm install      # first time only
npm run dev      # http://localhost:4321, live-reloads as you edit
```

If the build fails after an edit, the error names the project file and the field that's wrong (usually a missing `alt` or a typo in an image path).

## Deploy

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds and publishes in about a minute. The Actions tab shows progress.
