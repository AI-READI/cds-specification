---
lang: en-US
title: General principles
description: Description of the general principles of the CDS
---

# General principles

## Definitions

- The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
- Clinical dataset: A set of data files and associated metadata files issued from clinical research study.
- Data type: In a clinical research study, multiple modalities of data are collected. We postulate that data from one or multiple modalities can be characterized as being of a single data type if at least of of these is applicable:
  1. There exists an established standard structure for organizing data from these modalities together
  2. The modalities were collected through a shared method (instrument, device, etc.).
  3. The modalities cannot be interpreted separately

## General specifications

The CDS specifies the following at the root level of a dataset:

1. The data files must be organized into one folder per data type (c.f. definition of data type above). No data file must be present at the root level of a dataset.
2. Each folder must be named according the folder naming specification provided [here](folder-naming/overview.md).
3. Inside each folder, the data must be organized according to existing community-accepted standard for that data type if available or following some other standard structure. This must be documented in the metadata files where applicable.
4. No empty folders are allowed.
5. Only the set of metadata files specified [here](metadata-files/overview.md) are allowed at the root level
