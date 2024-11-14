import yaml
from pathlib import Path
import subprocess

HERE = Path(__file__).absolute()

def _flatten_values(lst):
    """Flatten a list of dictionaries to preserve file order from mkdocs.yml."""
    ordered_files = []
    for obj in lst:
        if isinstance(obj, dict):
            for val in obj.values():
                if isinstance(val, str):
                    ordered_files.append(val)
                else:
                    ordered_files.extend(_flatten_values(val))
    return ordered_files


logfile ="cds-docs.log"
filename ="cds-docs.pdf"
# Prepare the command options
cmd = [
    "pandoc",
    f"--shift-heading-level-by={1}",
    "--include-before-body=./cover.tex",
    "--include-in-header=./header.tex",
    f"--log={logfile}",
    f"--output={filename}",
]

build_root = HERE.parent.parent

with open(build_root / "mkdocs.yml", "r") as stream:
    mkdocs_yml = yaml.safe_load(stream)

sections = mkdocs_yml["nav"]
cmd += [str(build_root / "docs" / md) for md in _flatten_values(sections)]

print("pandoc command being run: \n\n" + "\n".join(cmd))
subprocess.run(cmd)
