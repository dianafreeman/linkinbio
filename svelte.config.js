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
          $lib: path.resolve('./src/lib'),
          $content: path.resolve('./_content'),
        },
      },
    },
  },
};

export default config; // Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
