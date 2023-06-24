import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch(), image(), mdx()]
});