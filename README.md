# Vite + React + TypeScript + ESLint + Husky + lint-staged

Here’s a complete Vite + React + TypeScript project setup with ESLint, Husky, and lint-staged — great for enforcing code quality in a modern dev workflow.

<hr>

### Warning: this project uses pnpm

- visit [pnpm.io](https://pnpm.io/) for more information

<hr>

## ✅ What You'll Get

    ⚡ Vite – fast dev server & build

    ⚛️ React with TypeScript

    📏 ESLint for linting

    🐶 Husky to run hooks

    🧹 lint-staged to only lint changed files

<hr>

## 🛠️ Step-by-Step Setup

1. Create Vite + React + TypeScript App

```bash
pnpm create vite@latest my-app --template react-ts
cd my-app
```

<br>

2. Install ESLint + Plugins

```bash
pnpm install -D eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals husky lint-staged typescript typescript-eslint vite @antfu/eslint-config @eslint-react/eslint-plugin @eslint/js @types/react @types/react-dom @vitejs/plugin-react
```

<br>

3. Add scripts to `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "preview": "vite preview",
    "prepare": "husky"
  }
}
```

<br>

4. [w3cj/eslint.config.mjs](https://gist.github.com/w3cj/21b1f1b4857ecd13d076075a5c5aaf13/)

- rename `eslint.config.js` to `eslint.config.mjs` to make it behave as a module and add the following content:

```js
import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  react: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});
```

<br>

- run pnpm lint to check the configuration

```bash
pnpm lint
```

<br>

5. [antfu VS Code support](https://github.com/antfu/eslint-config?tab=readme-ov-file#ide-support-auto-fix-on-save)

Install VS Code [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

<br>

- run pnpm lint:fix to fix the configuration

```bash
pnpm lint:fix
```

<br>

6. [lint-staged](https://github.com/okonet/lint-staged) configuration:

- add lint-staged to `package.json`:

```json
{
  "lint-staged": {
    "*": "pnpm lint"
  }
}
```

<br>

7. [husky](https://github.com/typicode/husky)

- initialize husky:

```bash
pnpm exec husky init
```

- edit `.husky/pre-commit` and replace 'pnpm test' with 'pnpm exec lint-staged':

```bash
pnpm exec lint-staged
```

<br>
