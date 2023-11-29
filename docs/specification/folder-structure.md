---
lang: en-US
title: Folder structure
description: Description of the CDS folder structure
---

# Folder structure

## About

The CDS specifies to maintain one folder per data type at the root level of a dataset. This page provides specification for deciding what constitute a data type, how to name each folder, and how to organize the data within each such folder.

## Specifications

### Data type folders

The data must be organized into one folder per data type. What constitutes a data type is left to dataset authors' best interpretation of the data type definition provided [here](general-principles.md#definitions). Inside each folder, the data type must be structured according to applicable standards, if available. Specifying such standards is out of the scope of the CDS.

:::info

It is strongly recommended to check if there exist standards to structure together the data modalities from your dataset. For instance:

- Clinical modalities such as survey responses, blood tests results, etc. should be considered one data type under the CDS as the Observational Medical Outcomes Partnership (OMOP) Common Data Model (CDM) is a commonly used standard to organize such modalities together.
- Brain imaging modalities such as task based and resting state functional MRI, diffusion weighted imaging, intracranial electroencephalography, etc. should be considered one data type under the CDS as the Brain Imaging Data Structure (BIDS) is a commonly used standard to organize such modalities together.

Resources such as fairsharing.org are recommended for identifying relevant data type-specific standards. Checking existing datasets that follow the CDS is also recommended. Some examples are available [here](../implementing-cds/examples.md).

:::

### Folder naming

An official Data Type Dictionary (DD) is maintained [here](https://github.com/AI-READI/datatype-dictionary) to provide a consistent way of naming each data type folder. The CDS does not impose to follow the DD for naming your data type folders as long as it is documented properly (c.f. next section) but the following recommendations are provided for optimal reusability:

- If your data type is documented in the DD, it is recommended to follow the data type code name from the DD to name your folder. Using one of the alternate names, if prefered over the code name, is also acceptable.
- If you still prefer to use a different name, it is recommended that you submit a request for adding your prefered name to the DD as a possible alternate name. Instuctions for doing so are included in the DD repository.
- If your data type is not listed in the DD it is recommended that you submit a request for adding a standard name for your data type in the DD. Instuctions for doing so are included in the DD repository.

Irrepective of the approach for choosing the name, the following naming convention must be followed: Only a-z characters are allowed (lowercase English alphabet) with the exception of underscores that must be used to separate words (no white space allowed).

### Documenting folder structure

The name of each datatype folder, what datatype it contain, etc. must be documented in the [datatype_dictionary.json](metadata-files/datatype-dictionary) metadata file.
