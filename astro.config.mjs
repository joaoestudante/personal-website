import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

import mdx from '@astrojs/mdx';
import m2dx from 'astro-m2dx';

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  normalizePaths: true,
  exportComponents: true
};

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch(), image(), mdx()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    //               ^^^^
    extendDefaultPlugins: true,
  },
  site: 'https://joaoestudante.com'
});