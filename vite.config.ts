import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Set a fixed dev port so the Local URL is predictable across runs
    // Common Vite default is 5173 — choose that to match many examples/tools
    port: 5173,
    open: true,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react']
  },
});
