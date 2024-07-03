import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        faqHtml: resolve(__dirname, 'faq.html'), 
        faqJs: resolve(__dirname, 'mainFaq.js'), 
        mainJs: resolve(__dirname, 'main.js'), 
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), 
    },
  },
});
