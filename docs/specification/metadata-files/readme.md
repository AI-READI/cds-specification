---
lang: en-US
title: README.md
description: Specifications for the README.md metadata file
---

# README.md

## About

The README.md file is a metadata file that contains a detailed description of the dataset in a human-friendly format. You can think about it as a detailed abstract for your dataset, i.e. the first thing that a human reuser of the data will read.

## Specifications

### Requirement

This metadata is mandatory for all datasets.

### Name and format

This metadata file must be named `README` and must be in the markdown format. The full name with extension must thus be `README.md`.

### Content

There is no mandatory requirements for the content of this metadata file, it is left up to the authors of the dataset to include information about their data they think would be critical to potential reusers of their dataset. The following section titles and content are highly recommended when available/applicable:

- **Include the name of the dataset at the top of the file**

- **Identifier**: In this section, indicate the DOI or any other globally unique and persistent identifier of the current version of the dataset.

- **Latest version number**: In this section, indicate the current version number of the published dataset.

- **Publication date**: In this section, indicate the date when the current version of the dataset was published (i.e., made available outside of the project members openly or through a restricted access). It is suggested to follow the [ISO 8601 date format](https://www.iso.org/iso-8601-date-and-time-format.html) (YYYY-MM-DD).

- **License**: In this section, mention the name of the data reuse license (refer to the [LICENSE.txt](license.txt) file in your dataset for additional details).

- **Dataset access/restrictions**: In this section, explain how the dataset can be accessed and any conditions/restrictions for accessing it.

- **Overview of the study**: In this section, provide a high-level description of the study associated with the dataset. Include for instance identifiers of the study, a brief overview of the study protocol, external links (website, manuscripts, protocols, etc.) to find out more about the study, etc.

- **Description of the dataset**: In this section, provide a detailed description of the dataset. Include the number of study participants (refer to the [participants.tsv file](participants.md) in your dataset for additional information), the data types collected, data deidentification approaches if any, the overall number of files and total size of the dataset, etc.

- **Data standards followed**: In this section, indicate the standards followed to structure the dataset, format the data files, etc. Make sure to include identifiers of the standards when available and/or link to the associated documentation.

- **Resources**: In this section, mention any specific resources (software, documentation, manuscripts, etc.) that are required/useful for using the data. Make sure to include identifiers and/or links to the resources.

- **How to cite**: In this section, provide instructions on how to cite the dataset if reused. Using the [American Psychological Association (APA) style](https://apastyle.apa.org/) is suggested.

- **Contact**: In this section, provide contact information of someone who can be reached out with questions regarding the dataset. You can also refer to the [study_description.json](study-description.json) and [dataset_description.json](dataset-description.json) metadata files for information about contact person/entity, authors, and contributors of the dataset.

- **Acknowledgement**: In this section, provide acknowledgement to the funding source and other with identifiers and/or links as applicable.
