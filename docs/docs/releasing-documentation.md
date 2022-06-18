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

   - (conditional) If the docs are ready to be versioned (there will be a new release of `FAIRshare` or `SODA for SPARC` and you updated the Changelog accordingly) run this command

   ```shell
    yarn run docusaurus docs:version 5.3.1
   ```

   Change the version number to the new version number

   - This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.

3. Update the `package.json` version number according to the Semantic Versioning principles outlined above in these circumstances:
   - You edited content for the currently released version. Important: `upcoming` is not the currently released version.
   - You edited content for previous versions.
   - You versioned the docs with the docusarus command.
4. Update the table on the `blah` page so that the new version of the documentation (the one updated in package.json in the previous step) is matched to its corresponding version of SODA for SPARC/FAIRshare.
5. Push the changes to the feature branch.
6. Create a pull request into the `main` branch.
7. Wait for review and once approved merge.

::: tip
GitHub actions to automatically release the documentation to both GitHub and Zenodo has been setup. Just be sure to follow conventional commits and our bots will handle the rest.
:::
