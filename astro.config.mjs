import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://gnoxnahte.github.io',
  // base: "portfolio-main",

  // For quick access
  devToolbar: {
    enabled: false
  },
  integrations: [mdx()],

  // Not sure why this isn't working
  // Explicitly using `data-astro-prefetch` on the main links for now.
  prefetch: {
    prefetchAll: true
  }
});