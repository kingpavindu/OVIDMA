import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faq: resolve(__dirname, 'faq.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Adjust path alias as needed
    },
  },
});
