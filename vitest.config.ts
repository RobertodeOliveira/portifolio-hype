import { defineConfig } from 'vitest/config'
import svgr from 'vite-plugin-svgr';
import * as path from "path";
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})