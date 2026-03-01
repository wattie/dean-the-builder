// @ts-check
import { defineConfig } from 'astro/config';

let tailwindPlugin = null;
try {
  const { default: tailwindcss } = await import('@tailwindcss/vite');
  tailwindPlugin = tailwindcss();
} catch (error) {
  console.warn(
    '[astro.config] Tailwind plugin not loaded (optional native dependency missing).'
  );
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: tailwindPlugin ? [tailwindPlugin] : [],
  },
});
