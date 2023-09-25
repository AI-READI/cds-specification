---
lang: en-US
title: Overview - Metadata Files
description: How to release SODA for SPARC to the public
---

# Overview - Metadata File

## Overview

The following metadata files must be included at the highest/root level of the dataset:

- [study-description.json](study-description.md): A metadata file containing provenance metadata, contextual metadata, as well as additional metadata about the study associated with the dataset. This metadata file is intended to prioritize machine readability. See [here](study-description.md) for specifications about this metadata file.
- [dataset-description.json](dataset-description.md): A metadata file containing provenance metadata, contextual metadata, as well as additional metadata necessary for reusing the dataset. This metadata file is intended to prioritize machine readability. See [here](dataset-description.md) for specifications about this metadata file.
- [README.md](readme.md): A metadata file containing a detailed description of the study and dataset in a human-friendly format to supplement the study-description.json and dataset-description.json files. See [here](readme.md) for specifications about this metadata file.
- [participants.tsv and participants.json](participants.md): Metadata files containing basic information about the participants in the study. The participant.tsv file contains the information while the participant.json file acts as a sidecar that describes the columns in the participant.tsv file. See [here](participants.md) for specifications about these metadata files.
- [CHANGELOG.md](changelog.md): A metadata file containing information about the changes between different versions of the dataset that are released. See [here](changelog.md) for specifications about this metadata file.
- [LICENSE.txt](license.md): A metadata file containing the terms under which the dataset is shared. See [here](license.md) for specifications about this metadata file.
