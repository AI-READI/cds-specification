## <!-- prettier-ignore -->

lang: en-US
title: General principles
description: Description of the general principles of the CDS

---

## Definitions

- The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
- Clinical dataset: A set of data files and associated metadata files resulting from a clinical research study.
- Datatype: In a clinical research study, multiple modalities of data are collected. A datatype designate one modality or a group of modalities. We postulate that data from multiple modalities can be characterized as being of a single datatype if at least one of these is applicable:
  1. There exists an established standard structure for organizing data from these modalities together
  2. The modalities were collected through a shared method (instrument, device, etc.)
  3. The modalities cannot be interpreted separately
  4. The modalities are typically collected together

## General specifications

The CDS specifies the following:

1.  No data file must be present at the root level.
2.  The data files must be organized into one directory per datatype at the root level as per the specification provided [here](root-directory-structure.md).
3.  Within each datatype-specific directory, data and metadata files must be organized according to an existing standard for that datatype, if available, or following the CDS-suggested structure, as explained [here](datatype-directory-structure.md).
4.  The following metadata files must be included at the root level:

    - [README.md](root-metadata-files/readme.md)
    - [LICENSE.txt](root-metadata-files/license.md)
    - [CHANGELOG.md](root-metadata-files/changelog.md)
    - [healthsheet.md](root-metadata-files/healthsheet.md)
    - [study_description.json](root-metadata-files/study-description.md)
    - [dataset_description.json](root-metadata-files/dataset-description.md)
    - [participants.tsv and participants.json](root-metadata-files/participants.md)
    - [dataset_structure_description.json](root-metadata-files/dataset-structure-description.md)

5.  No empty directories must be included anywhere in the dataset.

<div align="center">
  <figure>
    <img src="../../images/CDS-example.png" alt="cds-example" width="600"/>
    <figcaption> Illustration of the root level of a dataset structured following the CDS. </figcaption>
  </figure>
</div>
