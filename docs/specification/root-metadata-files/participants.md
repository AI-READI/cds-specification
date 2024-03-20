---
lang: en-US
title: participants
description: Specifications for the participants.tsv and participants.json metadata file
---

# participants.tsv and participants.json

## About

The participants.json and participants.tsv files are metadata files that contain basic information about the participants in the study.
The participant.tsv file contains the information while the participant.json file acts as a sidecar that describes the columns in the participant.tsv file.

## Specifications

### Requirement

This metadata is mandatory for all datasets.

### Name and format

The `participants.json` file must be in JSON format and the `participants.tsv` must be in TSV format.

### Content

The structure of these files must follow the exact specification provided in [BIDS v1.8.0](https://bids-specification.readthedocs.io/en/v1.8.0/03-modality-agnostic-files.html#participants-file)

The content of the `participants.tsv` file must be as follows:

- All column labels must be lower case with underscore used as word separator (no white space)
- A column labeled `participant_id` must be included with an associated value for each participant in the dataset
- A column with label matching each high-level folder name in the dataset must be included (for instance `ecg`, `oct` , etc.) with a boolean value (true/false) for each participant based on if that data type is available for that participant or not
- If participants are organized into multiple group/cohort, a column labeled `group` must be included with the group name specified for each participant
- Optionally include other columns as deemed adequate to facilitate data reuse such as `age_range`, etc.

The content of the `participants.json` file must be as follows:

- There must be one key for each column label in the `participants.tsv` file except for `participant_id` and the labels corresponding to the high-level folders
- All sub-keys should start with an upper case letter for the first word and white space should be used as word separator
- A `Description` sub-key must be included for each key to describe what that key represent
- A `Data type` sub-key must be included to indicate what type of data is associated with that key. The type of data must be from the list provided in [TBD]
- If there are a limited number of possible values for a given key, a sub-key called "Levels" must be included to list and define the different possible values
- If a key value is expressed in a given unit, a sub-key named "Units" must be included to specify the unit
- Other sub-keys can be included as deemed necessary for the reuse of the data
