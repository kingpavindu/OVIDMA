import { defineConfig } from 'vite';
import { join } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: join(__dirname, 'index.html'), 
        faqHtml: join(__dirname, 'faq.html'),
        mainJs: join(__dirname, './src/main.js'), 
        mainFaqJs: join(__dirname, './src/mainFaq.js'), 
      },
    },
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'), 
    },
  },
});
