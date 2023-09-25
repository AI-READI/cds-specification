---
lang: en-US
title: General principles
description: Description of the general principles of the CDS
---

# General principles

## Definitions

- The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
- Dataset: A set of data files and associated metadata files issued from clinical research study.
- Data type: In a clinical research study, multiple modalities of data are collected. We postulate that data from one or multiple modalities can be characterized as being of a single data type if at least of of these is applicable:
  1. There exists an established standard structure for organizing data from these modalities together
  2. The modalities were collected through a shared method (instrument, device, etc.).
  3. The modalities cannot be interpreted separately

## High-level dataset structure

- The data files must be organized into one folder per data type. No data file must be present at the highest level of a dataset.
- Each folder must be named according the folder naming specification provided [here](folder_naming/folder_naming_specs.md).
- Inside each folder, the data must be organized according to existing community-accepted standard for that data type if available or following some other standard structure. This must be documented in the metadata files as explained in the metadata files specifications.
- No empty folders are allowed.

### High-level metadata files

The following metadata files must be included at the highest/root level of the dataset:

- [study_description.json](metadata_files/study_description_specs.md): A metadata file containing provenance metadata, contextual metadata, as well as additional metadata about the study associated with the dataset. This metadata file is intended to prioritize machine readability. See [here](metadata_files/study_description_specs.md) for specifications about this metadata file.
- [dataset_description.json](metadata_files/dataset_description_specs.md): A metadata file containing provenance metadata, contextual metadata, as well as additional metadata necessary for reusing the dataset. This metadata file is intended to prioritize machine readability. See [here](metadata_files/dataset_description_specs.md) for specifications about this metadata file.
- [README.md](metadata_files/readme_specs.md): A metadata file containing a detailed description of the study and dataset in a human-friendly format to supplement the study_description.json and dataset_description.json files. See [here](metadata_files/readme_specs.md) for specifications about this metadata file.
- [participants.tsv and participants.json](metadata_files/participants_specs.md): Metadata files containing basic information about the participants in the study. The participant.tsv file contains the information while the participant.json file acts as a sidecar that describes the columns in the participant.tsv file. See [here](metadata_files/participants_specs.md) for specifications about these metadata files.
- [CHANGELOG.md](metadata_files/changelog_specs.md): A metadata file containing information about the changes between different versions of the dataset that are released. See [here](metadata_files/changelog_specs.md) for specifications about this metadata file.
- [LICENSE.txt](metadata_files/license_specs.md): A metadata file containing the terms under which the dataset is shared. See [here](metadata_files/license_specs.md) for specifications about this metadata file.
