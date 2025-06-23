import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  plugins: [react({ fastRefresh: false })],
  server: {
  proxy: {
    '/api': {
      target: 'https://lawngreen-walrus-394451.hostingersite.com',
      changeOrigin: true,
      secure: false,
    },
  },
},
};

