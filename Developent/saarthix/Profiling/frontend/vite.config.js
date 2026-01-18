import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/i5h0t1r1a2a2s.com/profiling/',
  plugins: [react()],
  server: {
    port: 4000
  }
})

