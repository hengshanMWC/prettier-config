/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    threads: false, // process.chdir() is not supported in workers
    globals: true,
    watch: false,
  },
})
