
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // هذا السطر يحل مشكلة الـ Build: يخبر Vite أن أي استيراد من @google/genai يجب أن يذهب إلى @google/generative-ai
      '@google/genai': '@google/generative-ai'
    }
  },
  define: {
    // لضمان وصول مفتاح API إلى الكود في بيئة الإنتاج
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
