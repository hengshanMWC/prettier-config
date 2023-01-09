# introduce
- [x] vite :package:
- [x] vitest :sheep:
- [x] typescript :alien:
- [x] eslint、husky :flashlight:

# init

```
git clone https://github.com/hengshanMWC/item-template.git
cd item-template
pnpm i
```

# publish test

next, simulate the publish process

## build local NPM source

```
npm install -g verdaccio
verdaccio
```

Of course, if you want to use it formally, please modify it `.npmrc`

If you want some of the packages to specify NPM source, you can modify the package Publishconfig. JSON registry

## release
```
npm run release
```
