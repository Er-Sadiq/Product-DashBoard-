import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cdn.drcode.ai',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // This removes the /api prefix when forwarding the request
      },
    },
  },
});
