const path = require('node:path')
const validateNpmPackageName = require('validate-npm-package-name')
const pkgs = require('./package.json')

const moduleName = pkgs.name
// 检查是否是合法的 npm 包名
if (!validateNpmPackageName(moduleName)) {
  throw new Error(`${moduleName} 不是一个合法的 npm 包名`)
}
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.ts'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      type: 'commonjs2',
    },
  },
}
