import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import mdx from '@astrojs/mdx';
import m2dx from 'astro-m2dx';
import { mermaid } from "./src/plugins/mermaid";

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  normalizePaths: true,
  exportComponents: true
};


// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch(), mdx()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions], mermaid],
    extendDefaultPlugins: true
  },
  site: 'https://joaoestudante.com'
});