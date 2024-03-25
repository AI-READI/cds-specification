---
lang: en-US
title: Datatype directory structure
description: Description of the CDS datatype directory structure
---

## About

The CDS specifies to maintain one folder per datatype at the root level of a dataset. This page provides specification about how data must be organized within each datatype folder.

## Specifications

### Datatype directories

Inside each datatype directory, the data and metadata must be structured according to applicable standards, if available. Resources such as fairsharing.org are recommended for identifying relevant datatype-specific standards.

If there is no existing community-agreed standard for structure data from a datatype, the CDS suggests following this structure within that datatype directory:

- Include one directory per modality
- Inside each modality directory include one directory per device/tool used to collect data from that modality.
- Inside each device directory, include one directory per participant
- Inside each participant directory, include the participant’s data and participant specific metadata if applicable.
- Directly under the datatype directory and alongside the modality directories, include a manifest.tsv metadata file according to the indications provided in the dedicated section below.

### manifest.tsv metadata

The manifest.tsv metadata file is intended to document all the data files within a datatype folder. It should follow this specification:

- A column called "filename" must be included where the paths of the data files, relative to the datatype folder, need to be listed.
- Additional column should be included as necessary to properly document relevant information about each datatype.
- The following naming convention must be followed for all colunm names: Only a-z characters (lowercase English alphabet) and 0-9 (numerical characters) are allowed with the exception of underscores that must be used to separate words (no white space allowed).

### Folder naming

Since there is no standard for modality and device names, we recommend naming each modality and device directory such that it best reflects its content. The participant folders should be named exactly as the ID used for that participant in the study.

The following naming convention must be followed for all folders: Only a-z characters (lowercase English alphabet) and 0-9 (numerical characters) are allowed with the exception of underscores that must be used to separate words (no white space allowed).

### Documenting folder structure

The structure under each datatypefodler must be documented in the [dataset_structure_description.json](root-metadata-files/dataset-structure-description.md) metadata file.
