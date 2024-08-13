import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@api': path.resolve(__dirname, './src/api'),
      '@generated': path.resolve(__dirname, './src/generated'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       // target: 'http://localhost:8000',
  //       target: 'https://aicams.yc-dev.bmit.ai',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },

  //! если выключить проксирование выше - то и со вторым вариантом корс ошибка
});
