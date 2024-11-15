---
lang: en-US
title: Root-level directory structure
description: Description of the CDS root-level directory structure
---

# Root-level directory structure

## About

The CDS specifies to maintain one directory per datatype at the root level of a dataset. This page provides specification for deciding what constitutes a datatype and how to name each directory.

## Specifications

### Datatype directories

The data must be organized into one directory per datatype at the root-level. What constitutes a datatype is left to dataset authors' best interpretation of the datatype definition provided [here](general-principles.md#definitions).

### Directory naming

Since there is no standard for datatype names, we recommend naming each datatype directory such that it best reflects its content. The following naming convention must be followed: Only a-z characters (lowercase English alphabet) and 0-9 (numerical characters) are allowed with the exception of underscores that must be used to separate words (no white space allowed).

### Documenting directory structure

The name of each datatype directory, what datatype it contains, etc. must be documented in the [dataset_structure_description.json](root-metadata-files/dataset-structure-description.md) metadata file.
