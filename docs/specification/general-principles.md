---
lang: en-US
title: General principles
description: Description of the general principles of the CDS
---

# General principles

## Definitions

- The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
- Clinical dataset: A set of data files and associated metadata files resulting from a clinical research study.
- Data type: In a clinical research study, multiple modalities of data are collected. We postulate that data from one or multiple modalities can be characterized as being of a single data type if at least of these is applicable:
  1. There exists an established standard structure for organizing data from these modalities together
  2. The modalities were collected through a shared method (instrument, device, etc.).
  3. The modalities cannot be interpreted separately

## General specifications

The CDS specifies the following at the root level of a dataset:

1. No data file must be present at this level.
2. The data files must be organized into one folder per data type as per the folder structure specification provided [here](folder-structure.md).
3. No empty folders are allowed.
4. The following metadata files must be included at the root level:

   - [README.md](metadata-files/readme.md)
   - [LICENSE.txt](metadata-files/license.md)
   - [datasheet.md](metadata-files/datasheet.md)
   - [datatype-dictionary.yaml](metadata-files/datatype-dictionary.md)
   - [study-description.json](metadata-files/study-description.md)
   - [dataset-description.json](metadata-files/dataset-description.md)
   - [participants.tsv and participants.json](metadata-files/participants.md)

5. A [CHANGELOG.md](metadata-files/changelog.md) metadata file must be included at the root level if a new version of a dataset is created.

<div align="center">
  <figure>
    <img src="/images/docs/CDS-example.png" alt="cds-example" width="300"/>
    <figcaption> Illustration of a dataset with two data types (electrocardiogram/ecg and optical coherence tomography/oct) structured following the CDS. </figcaption>
  </figure>
</div>
