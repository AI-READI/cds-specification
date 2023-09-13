---
lang: en-US
title: Release procedure
description: How to release SODA for SPARC to the public
---

# Release procedure

## Overview

A full release of SODA for SPARC requires two releases. One release on GitHub and another release on Zenodo using [FAIRshare](https://GitHub.com/fairdataihub/FAIRshare). The release on GitHub is used for distributing SODA for SPARC to users. The release on Zenodo is to follow [FAIR](https://www.go-fair.org/fair-principles/) principles.

## GitHub release checklist

- Enable Universal Analytics if it has been disabled.
- Remove any unnecessary console prints (Python and Javascript )
- Remove any stray files present in the repository. You can add more files to exclude in the package.json (`build.files`). The following files/folders will be excluded by electron-builder:
  - pysoda/
  - api.spec
  - build/
  - docs/
  - pyflask/
- Hide dev tools ( `main.js:146`)
- Remove open maximized (`main.js:231`)
- Turn on auto-updates
  - This is done in `main.js`
- Verify the release channel for users (`main.js:17`)
  - `latest` ➡️ regular users - Can only update to latest
  - `beta` ➡️ beta version users - Can update to beta and latest (On GitHub - Publish as a pre-release as well.)
  - `alpha` ➡️ alpha version users - Can update to all three channels (On GitHub - Publish as a pre-release as well.)
- Verify the version number in the `package.json` (Add beta/alpha if necessary.)
- Verify min app version required in Python. (`api.py:78`)

## GitHub release instructions

1. Merge every feature branch for the release into the `staging` branch.
2. Test the staging branch on macOS, Linux, and Windows. Use the following testing strategy:
   - Spread the build duty for each OS to three separate developers.
   - Each developer then tests a SODA for SPARC build that they did not create.
     - Testing a build that you created on the machine you used to create it is unreliable as some bugs still get through to release with this method.
   - If there are bugs, consult Bhavesh and/or team lead to decide if that bug will be addressed in the current release or not.
     - (conditional) If bugs wil be addressed it is best to create separate branches for each bug then merge back into staging once it has been tested. Repeat step one and two once all bugs fixes have been merged.
3. Update the `CHANGELOG.md` in staging with the new features, bug fixes, and any know issues.
   - This can be done directly in staging if desired.
4. Merge the staging branch into master.
5. Use FAIRshare to create a new release on Zenodo.
   - ⚠️IMP: At the final step do not allow Zenodo to make the release through GitHub.
6. Update the GitHub draft release text content to match that of previous releases.
7. Publish the release on GitHub.

The next step in the release process is to release the SODA for SPARC Docs repository. Check the [documentation release guide](/docs/releasing-documentation.html) for instructions on how to do that.

::: tip
It is a good idea to incrementally add documentation as each feature gets completed rather than waiting until release time to create it.
:::
