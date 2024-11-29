import { defineConfig } from 'astro/config';
import paraglide from '@inlang/paraglide-astro';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // Use astro's i18n routing for deciding which language to use
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  output: 'server',
  integrations: [paraglide({
    // recommended settings
    project: './project.inlang',
    outdir: './src/paraglide' //where your files should be
  }), tailwind()],
  adapter: vercel()
});