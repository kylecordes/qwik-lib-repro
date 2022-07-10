# Qwik library consumption

Initially this appears to work

```bash
cd example-lib
npm i
npm run build

cd ../example-app
npm i
npm uninstall example-lib
npm i ../example-lib/
npm run dev
```

But if continue from there, to build the app instead:

```bash
npm run build
```

The build fails:

```
Identifier directly after number
file: /Users/kcordes/projects/Qwik/qwik-lib-repro/example-app/src/entry_Counter.js:2:10
1: export { KeQObwj8Uik } from "./keqobwj8uik.js";
2: export { 3L0LnWO3YPk } from "./3l0lnwo3ypk.js";
             ^
error during build:
Error: Identifier directly after number
    at error (/Users/kcordes/projects/Qwik/qwik-lib-repro/example-app/node_modules/rollup/dist/shared/rollup.js:198:30)
    at Module.error (/Users/kcordes/projects/Qwik/qwik-lib-repro/example-app/node_modules/rollup/dist/shared/rollup.js:12555:16)

```
