import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
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
    adapter: adapter({
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false,
    }),
  },
};

export default config; // Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
