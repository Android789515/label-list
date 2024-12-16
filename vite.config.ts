import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'types': path.resolve(__dirname, './src/types.ts'),
      'utils': path.resolve(__dirname, './src/utils.ts'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
})
