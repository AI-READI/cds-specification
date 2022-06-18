---
lang: en-US
title: Icons
description: How to use the documentation site
---

# App Icons

## Windows

To generate the .ico files needed for windows applications, we will need to use Linux to generate these files. The `inkscape` and `imagemagick` packages are required to do this.

::: warning Source files
All source image files should be in the SVG format.
:::

Install the required packages.

```bash
sudo apt-get install inkscape imagemagick
```

Generate all the variants needed for the ico file.

```bash
inkscape -w 16 -h 16 -e 16.png icon.svg
inkscape -w 32 -h 32 -e 32.png icon.svg
inkscape -w 48 -h 48 -e 48.png icon.svg
inkscape -w 72 -h 72 -e 72.png icon.svg
inkscape -w 96 -h 96 -e 96.png icon.svg
inkscape -w 144 -h 144 -e 144.png icon.svg
inkscape -w 192 -h 192 -e 192.png icon.svg
inkscape -w 256 -h 256 -e 256.png icon.svg
inkscape -w 512 -h 512 -e 512.png icon.svg
```

Bundle the png files into the .ico format with the following commands:

```bash
convert 16.png 32.png 48.png 72.png 96.png 144.png 192.png 256.png 512.png icon.ico
```

Verify that all the files are generated and included correctly.

```bash
identify icon.ico
```

## macOS/Linux

Generate the PNG files directly from the SVG files. Use Adobe Illustrator/Inkscape if possible.

:::tip
If the suggested tools are not available, you can generate these files using online tools.
One suggested website is [svgtopng](https://svgtopng.com).
:::

::: warning Transparency
Always check the generated PNG files for transparency in their backgrounds.
:::

We will be using PNGs instead of ICNS files for better color depth on macOS.
