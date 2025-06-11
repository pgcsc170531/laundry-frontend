import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        injectOptions: {
          tags: [
            {
              tag: 'link',
              attrs: {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css',
              },
            },
          ],
        },
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})