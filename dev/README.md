# :toolbox: Developer Instructions

## :bangbang: Prerequisites

You will need the following installed on your system:

- Python 3.11+
- [Pip](https://pip.pypa.io/en/stable/)

## :running: Run Locally

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

## Versioning

Read the Docs uses branch/tag based versioning for the hosted documentation.

- If a change needs to be made in a specific version, the change should be made in the branch for that version.
- If the changes should persist across all versions, you may also need to make the change in the `main` branch as well. This will allow for futute versions to be built with the changes.

To create a new version, you will need to create a new branch with the version number. For example, if you are creating version `v0.6.0`, you will need to create a branch called `v0.6.0`.

To show this new version on the hosted site, go to the `Read the Docs` dashboard > `Versions` and activate the new version.

## :triangular_flag_on_post: Deployment

You will not need to do anything to the hosted site. Continuous Delivery has been setup with Read the Docs. All you need to do is push your commit and wait for it to deploy.
