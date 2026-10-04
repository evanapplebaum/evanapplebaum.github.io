// Defines the shape of a project's frontmatter.
// If you get a build error after editing a project's .md file, it means a field
// below is missing or the wrong type. The error message names the field.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // One folder per project: src/content/projects/<slug>/index.md
  // The folder name becomes the URL: /projects/<slug>/
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) => {
    // An image plus optional CSS object-position for cropping, e.g. "center 25%"
    const photo = z.object({
      src: image(),
      alt: z.string(),
      position: z.string().optional(),
    });

    return z.object({
      // ---- Card on the home page ----
      title: z.string(),
      summary: z.string(),
      cover: photo,
      tags: z.array(z.string()).default([]),
      order: z.number().default(100), // lower numbers show first
      draft: z.boolean().default(false), // true = hidden from the site
      wip: z.boolean().default(false), // adds a [WIP] badge
      github: z.url().optional(),
      link: z.url().optional(), // any external link (demo, video, paper)

      // ---- Detail page ----
      // A detail page is built only when `detail: true`.
      // Everything below is optional, each section only renders if present.
      detail: z.boolean().default(false),
      heading: z.tuple([z.string(), z.string()]).optional(), // ["Electric", "Skateboard"] -> second word highlighted
      meta: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      techTags: z.array(z.string()).default([]), // highlighted tags
      otherTags: z.array(z.string()).default([]), // plain tags
      hero: photo.optional(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      specs: z
        .array(z.object({ section: z.string(), rows: z.array(z.tuple([z.string(), z.string()])) }))
        .default([]),
      feature: z.object({ label: z.string(), title: z.string(), image: photo, caption: z.string() }).optional(),
      gallery: z.array(photo).default([]),
      challenges: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    });
  },
});

export const collections = { projects };
