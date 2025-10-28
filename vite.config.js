import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@' → src
    },
  },
  plugins: [
    svgr({
      include: '**/*.svg', // ?react 없이도 처리
      svgrOptions: { exportType: 'default' },
    }),
    react(),
    tailwindcss(),
  ],
});
