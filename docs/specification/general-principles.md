---
lang: en-US
title: General principles
description: Description of the general principles of the CDS
---

# General principles

## Definitions

- The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
- Clinical dataset: A set of data files and associated metadata files resulting from a clinical research study.
- Data type: In a clinical research study, multiple modalities of data are collected. A datatype designate one modality or a group of modalities. We postulate that data from multiple modalities can be characterized as being of a single datatype if at least of these is applicable:
  1. There exists an established standard structure for organizing data from these modalities together
  2. The modalities were collected through a shared method (instrument, device, etc.)
  3. The modalities cannot be interpreted separately
  4. The modalities are typically collected together

## General specifications

The CDS specifies the following:

1. No data file must be present at the root level.
2. The data files must be organized into one folder per datatype at the root level as per the specification provided [here](folder-structure.md).
3. Within each datatype specific folder, data and metadata files must be organized according to an existing standard for that datatype if available or following the CDS-suggested structure, as explained [here]().
4. The following metadata files must be included at the root level:

   - [README.md](metadata-files/readme.md)
   - [LICENSE.txt](metadata-files/license.md)
   - [CHANGELOG.md](metadata-files/changelog.md)
   - [healthsheet.md](metadata-files/healthsheet.md)
   - [study_description.json](metadata-files/study-description.md)
   - [dataset_description.json](metadata-files/dataset-description.md)
   - [participants.tsv and participants.json](metadata-files/participants.md)
   - [datatype_structure_dictionary.json](metadata-files/datatype-dictionary.md)

5. No empty folders must be included anywhere in the dataset.

<div align="center">
  <figure>
    <img src="/images/docs/CDS-example.png" alt="cds-example" width="600"/>
    <figcaption> Illustration of the root level of a dataset structured following the CDS. </figcaption>
  </figure>
</div>
