---
lang: en-US
title: Compliance with FAIR principles
description: How the CDS allow to comply with relevant FAIR principles
---

# Compliance with FAIR principles

## About

The [Findable, Accessible, Interoperable, Reusable (FAIR) data principles](https://doi.org/10.1038/sdata.2016.18) published in 2016 are the outcome of a large scale international effort for increasing the reuse of research data.
They provide 15 high-level instructions for optimizing the reuse of research data by humans and machines. They are widely adopted by all fields of research, including biomedical/clinical research, where the National Institutes of Health (NIH) are at the forefront of promoting, supporting, and enabling FAIR data practices.
We explain here how implementing the CDS enables to comply with the FAIR principles related to dataset structure and metadata files.

## Compliance assessment

Below, we provide as title the FAIR principles related to dataset structure and metadata files, and explain for each how the CDS help comply with them.

### F2. Data are described with rich metadata (defined by R1 below)

Jointly, all the metadata files prescribed in the CDS include rich metadata necessary for any reuser (human or machine) that is looking at the dataset for the first time.

### F3. Metadata clearly and explicitly include the identifier of the data they describe.

The identifier of the dataset is included in the dataset_description.json and README.md metadata files, which are mandatory in the CDS.

### I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.

All the metadata files prescribed in the CDS are in a file format that is typical for such metadata files and their content make use of controlled vocabularies when applicable. Specifically:

- The dataset_description.json is in the JSON format, which is a standard format for a metadata file aimed to be machine readable. The CDS imposes the content of this metadata file to follow the [DataCite JSON](https://doi.org/10.5438/1pca-1y05) structure with the [DataCite Metadata Schema 4.4](https://doi.org/10.14454/3w3z-sa82), which is a standard schema with controlled vocabulary based on the [DataCite Ontology](https://sparontologies.github.io/datacite/current/datacite.html) that is widely used for documenting research outcomes. The schema is extended in the CDS with the [ECRIN Metadata Schema v6.0 extension](https://doi.org/10.5281/zenodo.5554961), a schema developed to complement the DataCite Schema with terms related to clinical studies.
- The README.md is in the markdown format, which is standard format for a metadata file that is aimed at providing an overview of a research object (dataset, software, etc.) in a human-friendly format. There are no known standards for the structure and content of such a metadata file. Given the variety of datasets and personal preferences, the CDS is not imposing any either. The CDS, however, does impose specific information to be included in this file such that the content deemed necessary for dataset reuse in consistent across datasets.
- The participants.tsv and participants.json are replicated exactly from the [Brain Imaging Data Structure (BIDS) v1.8.0](https://bids-specification.readthedocs.io/en/v1.8.0/03-modality-agnostic-files.html#participants-file), a widely used structure for neuroimaging data. The BIDS imposes a standard structure and the use of controlled vocabulary in these files which is mimicked in the CDS.
- The CHANGELOG.md is in the markdown format, which is standard format for such a metadata file that documents changes between different versions of a research object (dataset, software, etc.). The CDS imposes the content of this metadata file to be structured following the [Keep a changelog v1.1.0](https://keepachangelog.com/en/1.1.0/) conventions. Instructions are also provided in the CDS for using standard format for certain content of this metadata file, such as [Semantic Versioning 2.0.0](https://semver.org/) for the version number of the dataset, [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601) for the release date, and specific categories to organize the release notes for each verison.
- The LICENSE.txt in the text format, which is standard format for such a metadata file that document license terms for a research object (dataset, software, etc.). The CDS imposes, when possible, to use a standard license from the [Software Package Data Exchange (SPDX) License List](https://spdx.org/licenses/), which is aimed at developing and promoting open standards for licenses. When using a standard license listed in the SPDX license list, the CDS also imposes the content of this file to be exactly as the text listed in the "Text" section of that license on the corresponding SPDX page, which are the official standard terms of that license.
- The samples.tsv and samples.json are replicated exactly from the [Brain Imaging Data Structure (BIDS) v1.8.0](https://bids-specification.readthedocs.io/en/v1.8.0/03-modality-agnostic-files.html#samples-file), a widely used structure for neuroimaging data. The BIDS imposes a standard structure and the use of controlled vocabulary in these files which is mimicked in the CDS.

### I2. (Meta)data use vocabularies that follow the FAIR principles

Vocabularies that follow the FAIR principles should:

- Have a globally unique and persistent identifier and be registered/indexed in a searchable resource (Findable)
- Be retrievable through their identifier using a standardized communication protocol (Accessible)
- Be available in a applicable language for vocabulary representation (Interoperable)
- Have provenance information and a clear usage license (Reusable)

The controlled vocabularies used in some of the CDS metadata files fulfill these requirements:

- The dataset_description.json file follows the DataCite Metadata Schema where the terms are based on the The DataCite Ontology. This ontology has two unique indentifier (doi.org/10.25504/FAIRsharing.c06f1e and RRID:SCR_006215), and is indexed in [FAIRsharing](https://fairsharing.org/) and the [Research Resource Identification (RRID) Portal](https://scicrunch.org/resources). It is retrievable via its DOI through HTTP, which is a standardized open, free, and universally implementable protocol. It is available is several format typically used for ontologies such as RDF/XML and JSON-LD. Provenance information for the DataCite Ontology is available on FAIRsharing, the RRID portal, and its [dedicated website](http://www.sparontologies.net/ontologies/datacite). It is shared under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.
- The dataset_description file also uses elements from the ECRIN Metadata Schema which uses controlled terms described in the schema itself. This schema has two unique identifiers (doi.org/10.25504/FAIRsharing.8hDgMC and doi.org/10.5281/zenodo.1312538), and is indexed in [FAIRsharing](https://fairsharing.org/) and [Zenodo](https://zenodo.org/). It is retrievable via its DOIs through HTTP, which is a standardized open, free, and universally implementable protocol. It is available is JSON format which is typically used schemas. Provenance information for the ECRIN Metadata Schema is available on FAIRsharing, Zenodo, and its [dedicated website](https://wiki.crmdr.org/index.php?title=The_ECRIN_Metadata_Schemas). It is shared under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.
- The participants.tsv, participants.json, samples.tsv, and samples.json are replicated exactly from the Brain Imaging Data Structure (BIDS). These files use controlled vocabularies for certain elements which are described in the BIDS specification. This specification has several unique indentifiers (doi.org/10.5281/zenodo.7263306, doi.org/10.25504/FAIRsharing.rd1j6t, and RRID:SCR_016124), and is indexed in [Zenodo](https://zenodo.org/), [FAIRsharing](https://fairsharing.org/), and the [Research Resource Indentification (RRID) Portal](https://scicrunch.org/resources). It is retrievable via its DOI through HTTP, which is a standardized open, free, and universally implementable protocol. The vocabularies used in the metadata files are described in the pdf document available on Zenodo and in the [online documentation](https://bids-specification.readthedocs.io/en/v1.8.0/). Provenance information for the BIDS is available on Zenodo, FAIRsharing, the RRID Portal, and the online documentation. It is shared under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.

### I3. (Meta)data include qualified references to other (meta)data

Qualified reference to other resources are references that use unique identifier when applicable and describe the nature of the relation between the dataset and the resources. Such qualified references are included in the dataset_description.json metadata file under the "RelatedIdentifier" key.

### R1. (Meta)data are richly described with a plurality of accurate and relevant attributes

A plurality of information (i.e., same information under different format) relevant to clinical datasets is provided across all the CDS metadata files. This is includes context for the dataset, e.g. information about the study associated with the dataset under the dataset_description.json and the README.md metadata files.

### R1.1. (Meta)data are released with a clear and accessible data usage license

The LICENSE.txt metadata file includes clearly the name of the license and terms for using the dataset. The CDS encourages to use a standard license from the [Software Package Data Exchange (SPDX) License List](https://spdx.org/licenses/) such that the license terms are clear and accessible. The name of the license is also included in the dataset_description.json and README.md metadata files.

### R1.2. (Meta)data are associated with detailed provenance

The dataset_description and README.md metadata files include extensive provenance metadata such as a description of the study associated with the dataset, who collected the data, etc.

### R1.3. (Meta)data meet domain-relevant community standards

To our knowledge, there are no community standards for the high-level structure of clinical research data. The CDS, by providing a standard high-level structure for organizing data and prescribing standard metadata files to include, are meant to fill this gap.
