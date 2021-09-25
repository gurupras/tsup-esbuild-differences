import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    'filter.worker.js'
  ],
  outDir: './dist/',
  clean: true,
  format: ['cjs'],
  splitting: false,
  sourcemap: false,
  bundle: true,
  legacyOutput: true,
  watch: false
})

