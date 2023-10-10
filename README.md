# introduce
- [x] [@abmao/pkgs](https://github.com/hengshanMWC/pkgs) 🗂️
- [x] build: webpack5 📦
- [x] typescript 👽
- [x] test: vitest 🔬
- [x] docs: vitepress 🧪
- [x] eslint、husky 🔦
- [x] commit: commitizen 📤

# init

```
git clone https://github.com/hengshanMWC/item-template.git
cd item-template
pnpm run init
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
