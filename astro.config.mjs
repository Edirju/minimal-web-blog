import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dainty-seahorse-3a8a19.netlify.app/",
  integrations: [preact()]
});