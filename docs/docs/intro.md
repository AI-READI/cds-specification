---
lang: en-US
title: Introduction to the CDS
description: Introduction to the Clinical Dataset Structure (CDS)
---

# Introduction to the CDS

## Overview

The Clinical Dataset Structure (CDS) is a simple and intuitive way to organize and describe clinical research datasets at the highest level (or root level) such that they are readily interoperable and easily reusable by humans and machines. The CDS is especially designed to optimize AI-readiness of datasets.

## Why we need the CDS

During clinical research studies, multiple modalities of data are typically collected from study participants such as survey answers, blood test results, electrocardiogram data, magnetic resonance imaging (MRI), etc. There exist some standards that specify how to structure the data and metadata for some modalities such as the [Brain Imaging Data Structure (BIDS)](https://bids-specification.readthedocs.io/en/stable/) for MRI data, the [SPARC Data Structure (SDS)](https://doi.org/10.1101/2021.02.10.430563) for neuromodulation-related data, and the [Observational Medical Outcomes Partnership (OMOP)](https://ohdsi.github.io/CommonDataModel/index.html) Common Data Model (CDM) for observational data. There is, however, no consensus on how to structure data and metadata from multiple modalities together into a consistently structured dataset. As a result, datasets from different clinical research studies are currently structured and documented differently which has two major impacts:

1. Datasets are not readily interoperable, meaning that it is difficult to combine datasets from different studies together. This limits, from instance, our ability to train AI/ML models on combined data from different studies.
2. Datasets are not easily reusable, meaning that it is difficult to understand and reuse data collected by someone else. This limits secondary analysis and reuse of data by external researchers not originally involved in a given study.

The Clinical Dataset Structure (CDS) is standard established to address these limitations by providing a simple and intuitive way for structuring clinical research data and associated metadata at the root level, i.e. the first level someone would see if they open the folder of a dataset to view its content. The CDS prescribes a folder structure for organizing a data into one folder per data type wherein data type-specific standard structures can then be followed within each folder. It also prescribes several metadata files to be included at the root level of the dataset for documenting relevant information about the data into human and machine-readable formats. All together, the CDS is designed to facilitate reusability of clinical research datasets by humans and machines through an intuitive structure and rich metadata.

## Development of the CDS

The CDS is developed as part of the [AI-READI project](https://aireadi.org/) funded by the [NIH Bridge2AI Common Fund](https://commonfund.nih.gov/bridge2ai). We refer to the [Governance section](../resources/governance.md) for information regarding the continuous development and maintenance of the CDS.

## Acknowledgment

This project is funded by the NIH under award number 1OT2OD032644. The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.
