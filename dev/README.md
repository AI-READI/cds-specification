# :toolbox: Developer Instructions

## :bangbang: Prerequisites

This project uses `yarn` as the package manager. If you do not have `yarn` installed, you can install it with the following command:

```bash
npm install -g yarn
```

If you already have a conda environment on your machine, you can install the dependencies with:

```bash
conda install -c conda-forge yarn nodejs
```

## :running: Run Locally

Clone the project

```bash
git clone https://github.com/AI-READI/cds-specification.git
```

Install the dependencies

```bash
yarn install
```

Start the server

```bash
yarn dev
```

## :building_construction: Build Locally

Use this to build a local production version of the site. User `docs:serve` to preview the local build.

```bash
yarn docs:build
```

## :arrow_forward: Submitting a PR

If you are an external contributor, please make a fork of the repository and submit a PR from your fork. If you are a member of the AI-READI Consortium, you can submit a PR from a branch in this repository.

1. Create a new branch from the `main` branch.
2. Make your changes. You can test your changes locally by running `yarn dev`. Make sure to check the console for any errors.
3. Test your changes on a local build by running `yarn build` and `yarn serve`. If this works, you can submit yout changes.
4. Push your changes to the remote branch.
5. Create a PR to merge your branch into `main`.

You can tag `@bvhpatel` or `@megasanjay` in the PR on GitHub for a review. If your changes are approved, they will be merged into `main` and deployed to the live site.

## :triangular_flag_on_post: Deployment

You will not need to do anything to the hosted site. Continuous Delivery has been setup with Vercel. All you need to do is push your commit and wait for it to deploy.