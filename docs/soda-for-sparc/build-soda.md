---
lang: en-US
title: SODA for SPARC Build Instructions
description: How to build SODA for SPARC 
---

# SODA for SPARC Build Instructions

Create a new anaconda environment that is used ONLY for release. This will make sure that any python package testing or jupyter notebooks you perform on the dev environment will not carry over to the release version.

## Windows

- Verify windows environment for GitHub Personal Access Token

- Create Personal Access Token here (Repo permissions should all be enabled): GitHub: Creating a personal access token

- Set personal access token to an environment variable
    - `[Environment]::SetEnvironmentVariable("GH_TOKEN","my-personal-token","User")`

    - Replace ‘my-personal-token’ with the token. Leave the rest as is

- If GH_TOKEN has been enabled before, verify its visibility: `$Env:GH_TOKEN`

::: tip
Sometimes, this instruction may not show the token. To verify that the token was added to the environment, try a release to GitHub. If it gets to the uploading stage, that means that the token was added successfully. 

:::

- Check GitHub to see if the release tag is present on GitHub. If it is, delete with the following command. The release tag will be automatically created in the next step so we need to remove any tags that exist. This delete step should only be done once and not on all three platforms.
    - git push --delete origin tagname

- Run the python installer command to create the python executable: 
    - `npm run python-onefile-build-win`
    - [Packaging Wiki](https://github.com/fairdataihub/SODA-for-SPARC/wiki/Packaging)


- Finally, If the GitHub token shows up after checking verifying its visibility, then run ‘npm run deploy-win’
    - This should create a draft release on GitHub with the latest and version tag. 

- Build the macOS and Linux versions and publish the release.


## Linux 

- Verify Linux environment for GitHub Personal Access Token
- Create Personal Access Token here (Repo permissions should all be enabled): GitHub: Creating a personal access token
- Set personal access token to an environment variable
    - In your .bashrc file include export GH_TOKEN=’my-personal-token’
    - Replace ‘my-personal-token’ with the token. Leave the rest as is

- If GH_TOKEN has been enabled before, verify its visibility:
    - echo $GH_TOKEN

- Check GitHub to see if the release tag is present on GitHub. If it is, delete with the following command. The release tag will be automatically created in the next step so we need to remove any tags that exist. This delete step should only be done once and not on all three platforms.
    - git push --delete origin tagname

- Run the python installer command to create the python executable: 
    - `npm run python-onefile-build`
    - [Packaging Wiki](https://github.com/fairdataihub/SODA-for-SPARC/wiki/Packaging)


## Mac

- Use the dev MacBook. Code signing is only enabled on this MacBook. 
- Verify that the ‘entitlements.mac.inherit.plist’ file is present in the repository
- Verify macOS  environment for GitHub Personal Access Token
- Create Personal Access Token here (Repo permissions should all be enabled): 
    - GitHub: Creating a personal access token
- Set personal access token to an environment variable
- In your .bashrc or .zshrc file include export GH_TOKEN=’my-personal-token’
    - Replace ‘my-personal-token’ with the token. Leave the rest as is
- If GH_TOKEN has been enabled before, verify its visibility:
    - echo $GH_TOKEN
- Check GitHub to see if the release tag is present on GitHub. If it is, delete with the following command. The release tag will be automatically created in the next step so we need to remove any tags that exist. This delete step should only be done once and not on all three platforms.
    - git push --delete origin tagname
- Run the python installer command to create the python executable: 
    - `npm run python-onefile-build`
    - [Packaging Wiki](https://github.com/fairdataihub/SODA-for-SPARC/wiki/Packaging)