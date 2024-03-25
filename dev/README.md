# :toolbox: Developer Instructions

## :bangbang: Prerequisites

You will need the following installed on your system:

- Python 3.11+
- [Pip](https://pip.pypa.io/en/stable/)

## :running: Run Locally

Don't forget to start the database before running the api. See [Database](#database) for more information.

1. Create a local virtual environment and activate it:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

   If you are using Anaconda, you can create a virtual environment with:

   ```bash
   conda create -n cds-docs-dev-env python=3.11
   conda activate cds-docs-dev-env
   ```

2. Install the dependencies for this package.

   ```bash
   pip install -r requirements.txt
   ```

3. Open the terminal and run the following command:

    ```bash
    mkdocs serve
    ```

## :arrow_forward: Submitting a PR

If you are an external contributor, please make a fork of the repository and submit a PR from your fork. If you are a member of the AI-READI Consortium, you can submit a PR from a branch in this repository.

1. Create a new branch from the `main` branch.
2. Make your changes. You can test your changes locally by running `mkdocs serve`. Make sure to check the console for any errors.
3. Push your changes to the remote branch.
4. Create a PR to merge your branch into `main`.

You can tag `@bvhpatel` or `@megasanjay` in the PR on GitHub for a review. If your changes are approved, they will be merged into `main` and deployed to the live site.

## :triangular_flag_on_post: Deployment

You will not need to do anything to the hosted site. Continuous Delivery has been setup with ReadTheDocs. All you need to do is push your commit and wait for it to deploy.
