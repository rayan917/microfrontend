import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest" />
/// <reference types="vite/client" />


export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    }
})