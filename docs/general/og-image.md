---
lang: en-US
title: OG Image
description: Generate open graph images for fairdataihub web apps
---

# Overview

To ensure that we follow a consistent online presence, an open graph image generation service has been setup at the domain og.fairdataihub.org. These images are meant to used in the `<head>` tag of any websites that need a thumbnail that will be visible when shared online. At the moment only three different style of backgrounds are used but this can be modified at any time.

The repository for this service can be found here: [@fairdataihub/og.fairdataihub.org](https://github.com/fairdataihub/og.fairdataihub.org)

## Technical details

This service is deployed on Vercel to take advantage of their serverless functions. However, this service also requires the [chrome-aws-lambda](https://www.npmjs.com/package/chrome-aws-lambda) module. This module takes up 98% of the maximum serverless function size so adding more features to this service might not be possible.

When adding additional code to this module, check to see if the final function deployment exceeds the maximum allowed size.

## How to use

To request an image from the og-image service, you can use query parameters in the URL for this purpose. The base url is https://og.fairdataihub.org/api/ogimage

```html
https://og.fairdataihub.org/api/ogimage?title=FAIR%20Data%20Innovations%20Hub&description=Making%20FAIR%20data%20practices%20more%20accessible
```

Three parameters are available where one is mandatory:

- `title` - **_Mandatory_** - Image title
- `description` - A short description that will be added under the title in the image
- `app` - The base style to use.
  - Allowed options: `fairdataihub` | `soda-for-sparc` | `fairshare`

:::tip
All images are generated on the fly so feel free to use this service for dynamically generated images. Ideally you would only use this for og-images but if another use case will benefit from this platform you can use this service for that as well.
:::

## Examples

:::warning
The URI encoded character for spaces '`%20`' is not visible on the docs. However this is required in the URL sent to this service.
:::

- Default style

```
https://og.fairdataihub.org/api/ogimage?app=fairdataihub&title=Open%20Graph%20Image%20Generation&description=To%20ensure%20that%20we%20follow%20a%20consistent%20online%20presence%2C%20an%20open%20graph%20image%20generation%20service%20has%20been%20setup%20at%20the%20domain%20og.fairdataihub.org
```

![](https://og.fairdataihub.org/api/ogimage?app=fairdataihub&title=Open%20Graph%20Image%20Generation&description=To%20ensure%20that%20we%20follow%20a%20consistent%20online%20presence%2C%20an%20open%20graph%20image%20generation%20service%20has%20been%20setup%20at%20the%20domain%20og.fairdataihub.org)

- SODA for SPARC style

```
https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Storybook&description=FAIR%20Data%20Innovations%20Hub%20uses%20Storybook%20to%20keep%20an%20index%20of%20all%20the%20components%20used%20within%20our%20applications.
```

![](https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Storybook&description=FAIR%20Data%20Innovations%20Hub%20uses%20Storybook%20to%20keep%20an%20index%20of%20all%20the%20components%20used%20within%20our%20applications.)

- FAIRshare style

```
https://og.fairdataihub.org/api/ogimage?app=fairshare&title=GitLab&description=We%20primarily%20use%20GitHub%20to%20manage%20our%20code%2C%20issues%2C%20and%20projects.%20However%2C%20we%20do%20have%20a%20mirror%20of%20all%20our%20code%20in%20a%20GitLab%20organization%20as%20well.
```

![](https://og.fairdataihub.org/api/ogimage?app=fairshare&title=GitLab&description=We%20primarily%20use%20GitHub%20to%20manage%20our%20code%2C%20issues%2C%20and%20projects.%20However%2C%20we%20do%20have%20a%20mirror%20of%20all%20our%20code%20in%20a%20GitLab%20organization%20as%20well.)

:::tip
If you want to play around with the images generated by this service or generate some image URLs you can use the simple editor provided at og.fairdataihub.org
:::