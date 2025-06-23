// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This is CRUCIAL for proper asset loading on Netlify
  build: {
    outDir: 'dist', // Explicitly set output directory
    emptyOutDir: true, // Clear the directory before building
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]' // Organize assets
      }
    }
  },
  server: {
    port: 3000 // Optional: Set development server port
  }
})