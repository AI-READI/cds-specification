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

1. No data file must be present at this level.
2. The data files must be organized into one folder per data type. What is considered a data type is left to the authors 'best interpretation of the definition above as long as it is properly justified in the datatype-dictionary.json metadata file (c.f. point 6).
3. Each folder must be named according the folder naming convention provided [here](folder-naming/naming-convention.md).
4. Inside each folder, the data must be organized according to existing community-accepted standard for that data type if available or following some other standard structure established by the dataset authors. This must be documented in the metadata datatype-dictionary.json metadata file (c.f. point 6).
5. No empty folders are allowed.
6. Metadata files specified [here](metadata-files/overview.md) must be included as applicable.

<div align="center">
  <figure>
    <img src="/images/docs/CDS-example.png" alt="CDS-example" width="300"/>
    <figcaption> Illustration of a dataset with two data types (electrocardiogram/ecg and optical coherence tomography/oct) structured following the CDS </figcaption>
  </figure>
</div>
