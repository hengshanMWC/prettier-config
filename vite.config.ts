/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import validateNpmPackageName from 'validate-npm-package-name'
import { pascalCase } from 'change-case'
import { name } from './package.json'

const moduleName = name
// 检查是否是合法的 npm 包名
if (!validateNpmPackageName(moduleName)) {
  throw new Error(`${moduleName} 不是一个合法的 npm 包名`)
}

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es', 'umd'],
      fileName: 'index',
      // 将其他形式的命名规则转换为驼峰命名
      name: pascalCase(moduleName),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    threads: false, // process.chdir() is not supported in workers
    globals: true,
    watch: false,
  },
})
