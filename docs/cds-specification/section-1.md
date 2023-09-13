---
lang: en-US
title: Build instructions
description: How to build SODA for SPARC
---

# Build instructions

## Setup Conda environment

Create a new anaconda environment that is used ONLY for release. This will make sure that any python package testing or jupyter notebooks you perform on the dev environment will not carry over to the release version.

## Windows

### Verify windows environment for GitHub Personal Access Token

Create a personal access token here (`repo` permissions should be all enabled): [GitHub: Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Set personal access token to an environment variable. Replace `my-personal-token` with the token. Leave the rest as is.

```sh
  [Environment]::SetEnvironmentVariable("GH_TOKEN", "my-personal-token", "User")
```

If `GH_TOKEN` has been enabled before, verify its visibility: `$Env:GH_TOKEN`

::: tip
Sometimes, this instruction may not show the token. To verify that the token was added to the environment, try a release to GitHub. If it gets to the uploading stage, that means that the token was added successfully.
:::

### Check GitHub for release tags

Check GitHub to see if the release tag is present on GitHub. If it is, delete with the following command. The release tag will be automatically created in the next step so we need to remove any tags that exist. This delete step should only be done once and not on all three platforms.

```sh
git push --delete origin tagname
```

### Bundle python dependencies

Run the python installer command to create the python executable:

```sh
npm run python-onefile-build-win
```

For more information on this step refer to the [packaging](https://github.com/fairdataihub/SODA-for-SPARC/wiki/Packaging) wiki entry.

### Bundle and upload to GitHub

Finally, If the GitHub token shows up after checking verifying its visibility, then run:

```sh
npm run deploy-win
```

- This should create a draft release on GitHub with the latest and version tag.

::: warning
Build the [macOS](#mac) and [Linux](#linux) versions and publish the release.
:::

## Linux

### Verify linux environment for GitHub Personal Access Token

Create a personal access token here (`repo` permissions should be all enabled): [GitHub: Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Set personal access token to an environment variable. Replace `my-personal-token` with the token. Leave the rest as is. In your `.bashrc` file include:

```bash
export GH_TOKEN='my-personal-token'
```

If `GH_TOKEN` has been enabled before, verify its visibility:

```sh
echo $GH_TOKEN
```

### Check GitHub for release tags

Check GitHub to see if the release tag is present on GitHub. If it is, delete with the following command. The release tag will be automatically created in the next step so we need to remove any tags that exist. This delete step should only be done once and not on all three platforms.

```sh
git push --delete origin tagname
```

#### Bundle python dependencies

Run the python installer command to create the python executable:

```sh
npm run python-onefile-build
```

For more information on this step refer to the [packaging](https://github.com/fairdataihub/SODA-for-SPARC/wiki/Packaging) wiki entry.

### Bundle and upload to GitHub

Finally, If the GitHub token shows up after checking verifying its visibility, then run:

```sh
npm run deploy-linux
```

- This should create a draft release on GitHub with the latest and version tag.

::: warning
Build the [windows](#windows) and [mac](#mac) versions and publish the release.
:::

## Mac

::: warning
Use the dev MacBook. Code signing is only enabled on this MacBook.
:::

### Prequisites

Verify that the `entitlements.mac.inherit.plist` file is present in the repository. It should have the following entries set

```xml
<key>com.apple.security.cs.allow-jit</key> <true/>
<key>com.apple.security.cs.allow-unsigned-executable-memory</key> <true/>
<key>com.apple.security.cs.allow-dyld-environment-variables</key> <true/>
<key>com.apple.security.cs.disable-library-validation</key> <true/>
```

### Verify macOS environment for GitHub Personal Access Token

Create a personal access token here (`repo` permissions should be all enabled): [GitHub: Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Set personal access token to an environment variable.Replace `my-personal-token` with the token. Leave the rest as is. In your `.bashrc` or `.zshrc` file include

```sh
export GH_TOKEN='my-personal-token'
```

If `GH_TOKEN` has been enabled before, verify its visibility:

```sh
echo $GH_TOKEN
```

### Check GitHub for release tags

Check GitHub to see if the release tag is present on GitHub. If it is, delete with the following command. The release tag will be automatically created in the next step so we need to remove any tags that exist. This delete step should only be done once and not on all three platforms.

```sh
git push --delete origin tagname
```

#### Bundle python dependencies

Run the python installer command to create the python executable:

```sh
npm run python-onefile-build
```

For more information on this step refer to the [packaging](https://github.com/fairdataihub/SODA-for-SPARC/wiki/Packaging) wiki entry.

### Bundle and upload to GitHub

Finally, If the GitHub token shows up after checking verifying its visibility, then run:

```sh
npm run deploy-mac
```

- This should create a draft release on GitHub with the latest and version tag.

::: warning
Build the [windows](#windows) and [Linux](#linux) versions and publish the release.
:::
