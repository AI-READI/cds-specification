---
lang: en-US
title: Config files
description: Some basic config files for all node projects
---

# Overview

Since we use nodejs in a lot of our projects, we have a lot of config files to manage. To make this easier, an npm package has been created to manage these files. This package is called [@fairdataihub/config](https://www.npmjs.com/package/@fairdataihub/config). This is not an exhaustive list of config files, but it should be enough to get you started.

Install this module into your project by running:

```sh
npm install --save-dev @fairdataihub/config
yarn add -D @fairdataihub/config
```

## Commitlint

Use this in your `commitlint.config.js` file. You will need all the usual commitizen libraries to be added into the `package.json` file for now.

```js
const { commitlintConfig } = require('@fairdataihub/config');

const config = commitlintConfig();

module.exports = config;
```

## Devmoji

Use this in your `devmoji.config.js` file. This should standardize all the emojis :monocle_face: :technologist: that we use for commit messages.

```js
const { devmojiConfig } = require('@fairdataihub/config');

const config = devmojiConfig();

module.exports = config;
```

## Prettier

Use this in your `prettier.config.js` file. This should standardize all the formatting that we use for commit messages.

```js
const { prettierConfig } = require('@fairdataihub/config');

const config = prettierConfig();

module.exports = config;
```

## Semantic releases

Use this in your `release.config.js` file. At the moment, it requires the `organization`, `repository name` and `whether to publish on npm`.

Setting the final parameter to `false`, will skip pushing it to npm but is needed for updating the `version` in the package.json file in CI.

```js
const { releasercConfig } = require('@fairdataihub/config');

const config = releasercConfig(
  'default',
  'fairdataihub',
  'fairdataihub-website',
  false,
);

module.exports = config;
```

## eslint

:construction: under development.

:::warning
Until a standardized config is made, you will have to use your own eslint config files.
:::
