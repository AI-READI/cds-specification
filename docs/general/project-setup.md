---
lang: en-US
title: Project setup
description: Snippets to quickly setup a project for FAIR Data Innovations Hub
---

# Overview

This page holds some quick little instructions for setting up a project for FAIR Data Innovations Hub. It gives you some snippets for setting up all the required dev tools. Feel free to modify these snippets to your needs.

:::warning
The following instructions assume that you are using Yarn. If you are using npm or pnpm, you will need to change the instruction accordingly.
:::

## Developer dependencies

Install the following dependencies for your project:

```sh
yarn add -D @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog
yarn add -D @fairdataihub/config devmoji
yarn add -D @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/git @semantic-release/github @semantic-release/npm @semantic-release/release-notes-generator semantic-release
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss
yarn add -D eslint-config-next eslint-import-resolver-typescript
```

## Husky

Install the following dependencies for your project:

```sh
npx husky-init
yarn install
```

Add the following hooks to your husky installation:

```sh
npx husky add .husky/commit-msg 'yarn commitlint --edit $1'
npx husky add .husky/pre-commit 'yarn lint-staged'
npx husky add .husky/prepare-commit-msg 'npx devmoji -e --lint'
```

### Lint staged

Run the following command to install the lint staged plugin:

```sh
yarn add -D lint-staged
```

Add the following scripts to your `package.json` file:

```json
  "scripts": {
    "lint": "eslint --ignore-path .gitignore \"./**/*.+(ts|js|tsx)\"",
    "format": "prettier --ignore-path .gitignore \"./**/*.+(ts|js|tsx)\" --write",
    "prepare": "husky install",
    "commit": "cz",
    "semantic-release": "semantic-release",
  }
```

Also add the following keys to your `package.json` file:

```json
  "lint-staged": {
    "./**/*.{ts,js,jsx,tsx}": [
      "yarn lint --fix",
      "yarn format"
    ]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
```

:::tip
You can update the path if you need something different for the commit hooks for linting.
:::

### Prettier

Refer to the [prettier section](/general/config.html#prettier) for more information on the options.

### Commitlint

Refer to the [commitlint section](/general/config.html#commitlint) for more information.

### Devmoji

Refer to the [devmoji section](/general/config.html#devmoji) for more information.

### Semantic releases

Refer to the [semantic releases section](/general/config.html#semantic-releases) for more information.

Also add the GitHub Release action for this to be fully compliant. See the [GitHub Release section](/git/workflows.html#create-a-release-on-github) for more information.
