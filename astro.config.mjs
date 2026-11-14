import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tenonstudio.github.io',
  outDir: 'dist',
  publicDir: 'public',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always'
});
