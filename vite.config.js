import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/;
export default defineConfig({
  plugins: [react()],
  server: {;
    proxy: {;
      '/api': {;
        target: 'https://wan-anime-stream.vercel.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
