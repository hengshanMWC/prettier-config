import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index.ts',
  ],
  clean: true,
  failOnWarn: false,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    dts: {
      respectExternal: false,
    },
  },
})
