---
lang: en-US
title: Fairdataihub developer documentation
description: How to use the documentation site
---

## About the documentation

### Tech Stack

[Vuepress](https://v2.vuepress.vuejs.org/guide/#introduction)

## Getting started

### ⚠️ Prerequisites

This project uses `Yarn` as package manager.

```bash
npm install --global yarn
```

If you already have a conda environment on your machine, you can install the dependencies with:

```bash
conda install -c conda-forge yarn nodejs
```

### Run locally

Clone the project

```bash
https://github.com/fairdataihub/fairdataihub-docs.git
```

Go to the project directory

```bash
cd fairdataihub-docs
```

Install dependencies

```bash
yarn install
```

Start the server

```bash
yarn dev
```

### Build locally

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```bash
yarn docs:build
```

## Acknowledgements

A special thank you to Vercel for hosting our application documentation.

![](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)
