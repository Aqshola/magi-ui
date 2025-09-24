import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"
import mdx from '@mdx-js/rollup'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'react',
      providerImportSource: '@mdx-js/react'
    }),
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
