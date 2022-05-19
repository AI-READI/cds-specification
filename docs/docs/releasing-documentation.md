---
lang: en-US
title: Documentation Release Procedure
description: How to create changes to FAIRshare and SODA for SPARC documentation sites
---

# SODA for SPARC/FAIRshare Docs Overview

Releasing Docs for `SODA for SPARC` and `FAIRshare` follow similar guidelines. Any change to content that is not a typo, link, or similar issue will be a minor change. Any change that is a typo, link, or similar issue will be a patch change. Anytime `FAIRshare` or `SODA for SPARC` is released and the documentation is versioned will be a major change.

::: tip
Semantic Versioning follows this format: x.x.x. First digit is major version. Second digit is minor version. Third digit is patch version.
You can get a deeper understanding of Semantic Versioning at the [Semantic Versioning](https://semver.org/) site.
:::

## Procedure for Changing Docs

1. Create a feature branch based off the main branch.
2. Update the docs with whatever content changes/bug fixes you want to make.

   - (conditional) If the docs are ready to be versioned (there will be a new release of `FAIRshare` or `SODA for SPARC` and you updated the Changelog accordingly) run this command: ~~~yarn run docusaurus docs:version 5.3.0~~~ [ change the version number to the new version number ]
     - This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.

3. Update the package.json version number according to the Semantic Versioning principles outlined above in these circumstances:
   - You edited content for the currently released version. Important: `upcoming` is not the currently released version.
   - You edited content for previous versions.
   - You versioned the docs with the docusarus command.
4. Update the table on the `blah` page so that the new version of the documentation (the one updated in package.json in the previous step) is matched to its corresponding version of SODA for SPARC/FAIRshare.
5. Push the changes to the feature branch.
6. Create a PR into the main branch.
7. Wait for review and once approved merge.
8. (conditional) If you are releasing a new version of `SODA for SPARC` or `FAIRshare` use `FAIRshare` to create a new release on `Zenodo` for the documentation.
   - IMP: Allow `Zenodo` to make the release through Github.

Both `FAIRshare` and `SODA for SPARC Docs` are automatically deployed to their respective websites through `Vercel`.
