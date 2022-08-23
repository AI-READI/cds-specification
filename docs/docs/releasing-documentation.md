---
lang: en-US
title: Documentation release procedure
description: How to create changes to FAIRshare and SODA for SPARC documentation sites
---

# SODA for SPARC/FAIRshare Docs Overview

Releasing docs for `SODA for SPARC` and `FAIRshare` follow similar guidelines. Any change to content that is not a typo, link, or similar issue will be a minor change. Any change that is a typo, link, or similar issue will be a patch change. Anytime a new version of `FAIRshare` or `SODA for SPARC` is released and the documentation is versioned will be a major change.

::: tip
Semantic Versioning follows this format: `X.X.X`.

First digit is major version. Second digit is minor version. Third digit is patch version.

You can get a deeper understanding of [Semantic Versioning](https://semver.org/) on their platform.
:::

## Procedure for changing Docs

1. Create a feature branch based off the `main` branch.
2. Update the docs with whatever content changes/bug fixes you want to make.

   - If the docs are ready to be versioned (there will be a new release of `FAIRshare` or `SODA for SPARC` and you updated the Changelog accordingly) run this command:

   ```shell
    yarn run docusaurus docs:version 5.3.1
   ```

   - The version number in this command will be displayed in the version dropdown on the docs site. Ensure it matches the version number of SODA for SPARC or FAIRshare.
   - This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.
     ::: info
     When you run the above command create a commit that signifies a breaking change has occurred. Example: `git commit -m "feat!: docs versioned for FAIRshare 5.0.0" -m "version 5.0.0 allows users to view FAIRshare 5.0.0 docs" -m "BREAKING CHANGE: docs versioned for FAIRshare 5.0.0"`
     :::

3. Push the changes to the feature branch.
4. Create a pull request into the `main` branch.
   - Name the PR using conventional commits formatting, and if there was a breaking change signify this in the PR name.
     ::: tip
     After creating a PR you can edit its name.
     :::
5. Wait for review and once approved merge.

::: tip
GitHub actions to automatically release the documentation to both GitHub and Zenodo has been setup. Just be sure to follow conventional commits and our bots will handle the rest.
:::

::: warning
If you are going to release a major version of the documentation, ensure the commit message includes a footer starting with `BREAKING CHANGE`. View the info under step 2 of the release procedure to see how to do this.
:::

## Additional Information

We still haven't determined how many app versions of the docs that we want to display. 3 major versions would be ideal. For any more, truncate the documentation versions so that we don't have to deal with excessively long build times for versions of the app that are no longer supported.
