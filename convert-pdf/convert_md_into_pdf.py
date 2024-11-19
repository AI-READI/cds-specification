import yaml
from pathlib import Path
import subprocess

HERE = Path(__file__).absolute()

def _flatten_values(lst):
    """Flatten a list of dicts of lists to a list of values."""
    for obj in lst:
        for val in obj.values():
            if isinstance(val, str):
                yield val
            else:
                yield from _flatten_values(val)


logfile ="cds-docs.log"
filename ="cds-docs.pdf"
title= "CDS Specification"
# Prepare the command options
cmd = [
    "pandoc",
    f"--log={logfile}",
    f"--output={filename}",
    # set 2 main paths
    "--resource-path=../docs/images",
    # Fix relative urls using lua filter
    "--lua-filter=base_link.lua",
    # Set main and title page to CDS specification
    f"--variable=title: {title}",
    f"--metadata=title: {title}",
    # Set Link colors
    "-V", "urlcolor=blue",
    "-V", "linkcolor=blue",
    "--from=markdown-implicit_figures",
]

build_root = HERE.parent.parent

#
with open(build_root / "mkdocs.yml", "r") as stream:
    mkdocs_yml = yaml.safe_load(stream)

sections = mkdocs_yml["nav"]
cmd += [str(build_root / "docs" / md) for md in _flatten_values(sections)]

# print("pandoc command being run: \n\n" + "\n".join(cmd))

# Run the command
subprocess.run(cmd)
