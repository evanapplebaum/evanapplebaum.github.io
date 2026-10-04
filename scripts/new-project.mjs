// Usage: npm run new -- my-project-slug
// Creates src/content/projects/<slug>/index.md from a template.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run new -- my-project-slug   (lowercase letters, numbers, dashes)');
  process.exit(1);
}

const dir = `src/content/projects/${slug}`;
if (existsSync(dir)) {
  console.error(`${dir} already exists`);
  process.exit(1);
}

mkdirSync(dir, { recursive: true });
writeFileSync(
  `${dir}/index.md`,
  `---
title: New Project
summary: >-
  One or two sentences for the home page card.
cover: { src: ./cover.svg, alt: Describe the photo }   # swap for your photo, e.g. ./cover.jpg
tags: [Tag One, Tag Two]
order: 10          # lower = earlier on the home page
draft: true        # set to false when it's ready to go live
# wip: true
# github: https://github.com/evanapplebaum/...
# link: https://...

# ---- Uncomment for a full detail page (see skateboard/index.md for every option) ----
# detail: true
# heading: [New, Project]
# techTags: []
# hero: { src: ./hero.jpg, alt: ... }
# stats:
#   - { value: 10 Hz, label: Control Loop }
# gallery:
#   - { src: ./photo-1.jpg, alt: ... }
# challenges:
#   - title: The hard part
#     body: What went wrong and how you fixed it. **Bold** works.
---

Overview for the detail page goes here. Plain Markdown.
`,
);
writeFileSync(
  `${dir}/cover.svg`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"><rect width="1600" height="900" fill="#111118"/><text x="800" y="460" fill="#5a5a78" font-family="monospace" font-size="40" text-anchor="middle">${slug}</text></svg>\n`,
);
console.log(`Created ${dir}/ with index.md and a placeholder cover.svg.`);
