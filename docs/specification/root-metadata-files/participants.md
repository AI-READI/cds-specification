---
lang: en-US
title: participants
description: Specifications for the participants.tsv and participants.json metadata file
---

# participants.tsv and participants.json

## About

The participants.json and participants.tsv files are metadata files that contain information about the participants in the study.
The participant.tsv file contains the information while the participant.json file acts as a sidecar that describes the columns in the participant.tsv file.

## Specifications

### Requirement

This metadata is mandatory for all datasets.

### Name and format

The `participants.json` file must be in JSON format and the `participants.tsv` must be in TSV format.

### Content

#### participants.tsv

The content of the `participants.tsv` file must be as follows:

- All column labels must follow the following naming convention: Only a-z characters (lowercase English alphabet) and 0-9 (numerical characters) are allowed with the exception of underscores that must be used to separate words (no white space allowed).
- The first column must be labeled `participant_id` and must list the IDs used in the study for all participants in the dataset.
- There must be one label for each datatype directory named exactly as as the corresponding directory. A boolean value (true/false) must be assigned for each participant based on if data from that datytype is included in the dataset for the participant or not.
- If participants are organized into multiple group/cohort, a column labeled `group` must be included with the group name specified for each participant
- Optionally include other columns as deemed adequate to facilitate data reuse such as `age`, etc.

#### participants.json

The `participants.json` is intended to document the meaning and allowable values of each column in the the `participants.tsv` file. Its content must be as follows:

- There must be one key for each column label in the `participants.tsv` file except for `participant_id` and the labels corresponding to the root-level datatype directories
- All sub-keys must follow the same naming convention as the column labels in the `participants.tsv` file
- A `description` sub-key must be included for each key to describe what the corresponding column represents
- A `data_type` sub-key must be included to indicate what type of data is associated with that column (e.g., `string`, `integer`, etc.)
- If there are a limited number of possible values for a given column, a sub-key called `levels` must be included to list and define the different possible values
- If a key value is expressed in a given unit, a sub-key named `units` must be included to specify the unit
- Other sub-keys can be included as deemed necessary for understanding the content of the corresponding column.
