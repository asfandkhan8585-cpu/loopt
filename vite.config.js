import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// change base to repo name so GitHub Pages serves correctly
export default defineConfig({
  plugins: [react()],
  base: '/loopt/'
});
