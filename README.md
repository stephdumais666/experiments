# Experiments

Testing frameworks, libraries, unit tests and various helpers.

## Configurations and setup

Intended for use with both js and typescript.

- ESLint (using flat file config eslint.config.js)
- Prettier

Runs JEST with ESM via

```
"scripts": {
"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest"
},
```

## Dashboard

Dashboard app created via NextJs, using Mock Service Worker for test APIs and Jest for unit tests
