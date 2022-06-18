---
lang: en-US
title: Release procedure
description: How to release FAIRshare to the public
---

# Release procedure

## Overview

A full release of FAIRshare requires two releases. One release on GitHub and another release on Zenodo using [FAIRshare](https://GitHub.com/fairdataihub/FAIRshare). The release on GitHub is used for distributing FAIRshare to users. The release on Zenodo is to follow [FAIR](https://www.go-fair.org/fair-principles/) principles.

## GitHub release checklist

- Enable Universal Analytics if it has been disabled. This is added in as a local analytics plugin throught Vue.
- Remove any unnecessary console prints (Python and Javascript)
- Remove any stray files present in the repository. You can add more files to exclude in the `vue.config.js` (`builderOptions.files`). The following files/folders will be excluded by electron-builder:
  - pyflask/
  - api.spec
- Turn on auto-updates
  - This is done in `background.js`
- Verify the version number in the `package.json` (Add beta/alpha if necessary.)
- Verify min api version required in Python. (`api.py:50`)
- Verify min api version required in Vue. (`App.vue:143`)

## GitHub release instructions

1. Merge every feature branch for the release into the `staging-dev` branch.
2. Test the `staging-dev` branch on macOS, Linux, and Windows.
3. Update the `CHANGELOG.md` in `staging-dev` with the new features, bug fixes, and any know issues.
   - This can be done directly in `staging-dev` if desired.
4. Merge the `staging-dev` branch into `main`.
5. Use FAIRshare to create a new release on Zenodo.
   - ⚠️IMP: At the final step do not allow Zenodo to make the release through GitHub.
6. Update the GitHub draft release text content to match that of previous releases.
7. Publish the release on GitHub.

The next step in the release process is to release the FAIRshare-Docs repository. Check the [documentation release guide](/docs/releasing-documentation.html) for instructions on how to do that.

::: tip
It is a good idea to incrementally add documentation as each feature gets completed rather than waiting until release time to create it.
:::
