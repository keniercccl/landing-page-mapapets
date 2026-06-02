import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://keniercccl.github.io/landing-page-mapapets/',
  plugins: [react()],
})