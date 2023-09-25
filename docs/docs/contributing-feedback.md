---
lang: en-US
title: Contributing/Feedback
description: Referencing the CDS
---

# Contributing/Feedback

## Overview

The Clinical Dataset Structure (CDS) is a simple and intuitive way to organize and describe clinical research datasets at the highest level such that they are interoperable and easily reusable by humans and machines (AI/ML).

## Why we need the CDS

All documentation that applies to all fairdataihub projects will be in the docs section.
For project specific instructions use the sidebar to navigate to the desired project for its build and release instructions.

## Updating the documentation

Whenever a change in build, release, or development instructions occurs update the documentation. To do this follow the below steps:

- Clone the [dev.fairdataihub.org](https://github.com/AI-READI/cds-specification.git) repository from GitHub

```sh
git clone https://github.com/fairdataihub/dev.fairdataihub.org.git
```

- Get the project running locally using the [README](/docs/about.md) instructions
- Create a separate branch based off `main`
- Make your changes to the project and commit them to the local repository
- Create a PR to the main branch with [@megasanjay](https://github.com/megasanjay) and/or [@slugb0t](https://github.com/slugb0t) as reviewers
- After approval merge the PR into `main`

These docs use Vercel to automatically deploy to the [Fair Data Innovations Hub developer documentation site](https://dev.fairdataihub.org/).
