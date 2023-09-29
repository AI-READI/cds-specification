---
lang: en-US
title: CHANGELOG.md
description: Specifications for the CHANGELOG.md metadata file
---

# CHANGELOG.md

## About

The CHANGELOG.md is a metadata file that contains information about the changes between different versions of the dataset that are released.
This file is intended to provide a human and machine-readable overview of different dataset versions that are released, their release date,
and changes included between the different versions.

## Specifications

### Requirement

This metadata is mandatory for all datasets, including the first release.

### Name and format

This metadata file must be named `CHANGELOG` and must be in the markdown format. The full name with extension must thus be `CHANGELOG.md`.

### Content

The content must be structured following the [Keep a changelog v1.1.0](https://keepachangelog.com/en/1.1.0/) conventions and must include the specified information, i.e.:

- The content of the file must start with a “Changelog” title.
- The preamble must explain what this changelog file is for and specify the format followed (i.e., Keep a changelog v1.1.0 and Semantic Versioning 2.0.0).
- There must be an entry for every single version.
- The latest version must be listed first.
- Each release note must start with a version number as a title followed by the release date.
  The version number must follow the [Semantic Versioning 2.0.0](https://semver.org/) and the release date must follow the [ISO-8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) (YYYY-MM-DD).
- The content of each release note must be organized under these categories as applicable (the definition of the categories have been adapted
  from the Keep a changelog conventions to be more suitable for datasets):
  - “Added”: High-level explanation of the new data or metadata files that have been added.
  - “Changed”: High-level explanation of previously published data or metadata files that have been modified.
  - “Removed”: High-level explanation of the previously published data or metadata files that have been removed.
