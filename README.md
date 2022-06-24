# MyCash Frontend

Web Frontend of the MyCash Solution. 

## Source overview

The structure of the code are inspired by this article:

[How to define a highly scalable folder structure for your Angular project](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Update All Packages to the Latest Version

Leveraging [npm-check-updates](https://www.npmjs.com/package/npm-check-updates), you can upgrade all package.json 
dependencies to the latest version.

Run `npm-check-updates` to list all version hints in package.json:

```bash
ncu
```

Run `npm-check-updates` to upgrade all version hints in package.json, allowing installation of the new major versions:

```bash
ncu -u
```

Remember to run a standard install after `package.json` has been updated:

```bash
npm install
```
