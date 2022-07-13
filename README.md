# Qwik library consumption

Build everything:

```bash
cd example-lib
npm i
npm run build

cd ../example-app
npm i
npm uninstall example-lib
npm i ../example-lib/
```

See that dev works:

```bash
npm run dev
```

See that build/serve works:

```bash
npm run build
npm run serve
```
