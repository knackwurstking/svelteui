import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// TODO: move the public/ dir into src/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
