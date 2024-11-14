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
# Prepare the command options
cmd = [
    "pandoc",
    # "--include-before-body=../../convert-pdf/cover.tex",
    # "--include-in-header=../../convert-pdf/header.tex",
    f"--log={logfile}",
    f"--output={filename}",
    "--resource-path=../docs/images",
    "--variable=title: CDS Specification"
]

build_root = HERE.parent.parent

with open(build_root / "mkdocs.yml", "r") as stream:
    mkdocs_yml = yaml.safe_load(stream)

sections = mkdocs_yml["nav"]
cmd += [str(build_root / "docs" / md) for md in _flatten_values(sections)]

print("pandoc command being run: \n\n" + "\n".join(cmd))
subprocess.run(cmd)
