"""Hooks for the documentation build process."""

import os
import shutil


def copy_schema_files(config, **kwargs):
    """
    Copies schema files to the specified site directory.

    Args:
        config (dict): The configuration settings.
        **kwargs: Additional keyword arguments.

    Returns:
        None

    Raises:
        None
    """

    site_dir = config["site_dir"]
    # Get the public folder path
    public_folder = "public"

    # Get the schema folder path
    schema_folder = os.path.join(public_folder, "schemas")

    # Get a list of all the files in the schema folder
    schema_files = os.listdir(schema_folder)

    # Create the schema folder in the site directory
    schema_dir = os.path.join(site_dir, "schemas")
    os.makedirs(schema_dir, exist_ok=True)

    # Copy the schema files to the site directory
    for schema_file in schema_files:
        src = os.path.join(schema_folder, schema_file)
        dst = os.path.join(schema_dir, schema_file)
        shutil.copyfile(src, dst)
