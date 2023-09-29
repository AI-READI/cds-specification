---
lang: en-US
title: study_description.json
description: Specifications for the study_description.json metadata file
---

# study_description.json

## About

The study_description.json is a metadata file that contains provenance metadata, contextual metadata,
as well as additional metadata about the study associated with the dataset. This metadata file is intended to prioritize machine readability.

## Specifications

### Requirement

This metadata is mandatory for all datasets.

### Name and format

This metadata file must be named `study_description` and must be in the JSON format. The full name with extension must thus be `study_description.json`.

### Content

This metadata file must be structured as per the JSON schema provided [here](../../public/schemas/study_description.schema.json).
