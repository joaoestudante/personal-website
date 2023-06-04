import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch(), image()]
});