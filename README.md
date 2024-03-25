<div align="center">

<img src="https://freesvg.org/img/1653682897science-svgrepo-com.png" alt="logo" width="200" height="auto" />

<br />

<h1>Clinical Dataset Structure (CDS)</h1>

<p>
Documentation of the CDS, a standardized high-level data and metadata structure for creating interoperable and reusable clinical research datasets.
</p>

  <h4>
    <a href="https://cds-specification.vercel.app/">cds-specification.vercel.app</a>
  </h4>
  
<br />

<p>
  <a href="https://github.com/AI-READI/cds-specification/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/AI-READI/cds-specification.svg?style=flat-square" alt="contributors" />
  </a>
  <a href="https://github.com/AI-READI/cds-specification/stargazers">
    <img src="https://img.shields.io/github/stars/AI-READI/cds-specification.svg?style=flat-square" alt="stars" />
  </a>
  <a href="https://github.com/AI-READI/cds-specification/issues/">
    <img src="https://img.shields.io/github/issues/AI-READI/cds-specification.svg?style=flat-square" alt="open issues" />
  </a>
  <a href="https://github.com/AI-READI/cds-specification/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/AI-READI/cds-template/issues/">Report Issues/Make suggestions</a>
  </h4>
</div>

<br />

---

## About

The Clinical Dataset Structure (CDS) is a simple and intuitive standard for the high-level organization of clinical research data and metadata. The CDS is designed to facilitate reusability of the dataset by humans and machines by making it intuitive to navigate and exposing information they may need when looking at the dataset. You can find everything about the CDS in [its documentation](https://cds-specification.vercel.app/) that is maintained from this repository.

<div align="center">
    <img src="docs/public/images/docs/CDS-example.png" alt="CDS example" width="400" height="auto" />
    <p><i> Illustration of a dataset with two datatypes (electrocardiogram and optical coherence tomography) structured following the CDS. </i></p>
</div>

## Contributing

<a href="https://github.com/AI-READI/cds-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AI-READI/cds-template" />
</a>

### Providing feedback/suggestions

Have feedback, suggestions, or questions related to the CDS? Submit them by opening a [GitHub issue](https://github.com/AI-READI/cds-specification/issues). If you want to suggest changes to the CDS documentation, you can also submit a PR by following the instructions in the developer instructions (see next section).

### Developer instructions

Instructions for making changes to the CDS documentation, submitting a PR, and publishing a new version of the documentation and guidelines are available [here](/dev/README.md).

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by]. See [LICENSE](LICENSE.txt) for more information.

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png

[![CC BY 4.0][cc-by-image]][cc-by]

## How to cite

If you are using the CDS or any of the associated effort, please cite:

```bash
    Coming soon
```

## Acknowledgements

This project is funded by the NIH under award number 1OT2OD032644. The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.

<br />

---

<br />

<div align="center">

<a href="https://aireadi.org">
  <img src="https://github.com/AI-READI/AI-READI-logo/raw/main/logo/png/option2.png" height="200" />
</a>

</div>

# cds-specification

## Getting started

### Prerequisites/Dependencies

You will need the following installed on your system:

- Python 3.11+
- [Pip](https://pip.pypa.io/en/stable/)

### Setup

If you would like to update the api, please follow the instructions below.

Don't forget to start the database before running the api. See [Database](#database) for more information.

1. Create a local virtual environment and activate it:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

   If you are using Anaconda, you can create a virtual environment with:

   ```bash
   conda create -n cds-docs-dev-env python=3.11
   conda activate cds-docs-dev-env
   ```

2. Install the dependencies for this package.

   ```bash
   pip install -r requirements.txt
   ```

## Running

Open the terminal and run the following command:

```bash
mkdocs serve
```

## License

This work is licensed under
[MIT](https://opensource.org/licenses/mit). See [LICENSE](https://github.com/AI-READI/pyfairdatatools/blob/main/LICENSE) for more information.

<a href="https://aireadi.org" >
  <img src="https://github.com/AI-READI/AI-READI-logo/blob/main/logo/png/option2.png" height="30" alt='AI-READI logo' />
</a>
