import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/http/server.ts'],
  outDir: 'dist',
  format: ['cjs'],
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false,
  dts: false,
})
