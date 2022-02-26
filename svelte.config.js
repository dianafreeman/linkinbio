import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';
const mode = process.env.NODE_ENV;
const dev = mode === 'development';

process.env.TAILWIND_MODE = dev ? 'watch' : 'build';

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          $components: path.resolve('./src/lib/components'),
          $config: path.resolve('./src/lib/config'),
          $content: path.resolve('./src/content'),
        },
      },
    },
  },
};

export default config; // Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
