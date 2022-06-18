---
lang: en-US
title: Overview
description: Overview of how to use fairdataihub documentation
---

# Overview

This documentation is a central repository for storing Fair Data Innovations Hub project documentation. It is intended to be used by the developer team for getting instructions on running, building, and releasing our projects. It also provides the conventions the team should be using while working on our projects.

## Using the documentation

All documentation that applies to all fairdataihub projects will be in the docs section.
For project specific instructions use the sidebar to navigate to the desired project for its build and release instructions.

## Updating the documentation

Whenever a change in build, release, or development instructions occurs update the documentation. To do this follow the below steps:

- Clone the [dev.fairdataihub.org](https://github.com/fairdataihub/dev.fairdataihub.org) repository from GitHub

```sh
git clone https://github.com/fairdataihub/dev.fairdataihub.org.git
```

- Get the project running locally using the [README](/docs/README.md) instructions
- Create a separate branch based off `main`
- Make your changes to the project and commit them to the local repository
- Create a PR to the main branch with [@megasanjay](https://github.com/megasanjay) and/or [@aaronm-2112](https://github.com/aaronm-2112) as reviewers
- After approval merge the PR into `main`

These docs use Vercel to automatically deploy to the [Fair Data Innovations Hub developer documentation site](https://dev.fairdataihub.org/).
