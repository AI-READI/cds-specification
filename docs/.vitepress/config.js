import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Developer Documentation',
  description: 'Documentation for FAIR Data Innovations Hub developers',
  titleTemplate: 'FAIR Data Innovations Hub',
  port: 3000,

  appearance: true,
  lastUpdated: true,

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    // logo: "https://fairdataihub.org/logo.svg",
    // siteTitle: false,

    editLink: {
      pattern:
        'https://github.com/fairdataihub/fairdataihub-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fairdataihub' },
      { icon: 'twitter', link: 'https://twitter.com/fairdataihub' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/california-medical-innovations-institute/',
      },
    ],

    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Overview',
        link: '/docs/overview.md',
      },
      {
        text: 'SODA for SPARC',
        link: '/soda-for-sparc/storybook.md',
      },
      {
        text: 'FAIRshare',
        link: '/fairshare/storybook.md',
      },
      {
        text: 'fairdataihub.org',
        link: 'https://fairdataihub.org',
      },
    ],

    sidebar: {
      '/docs': sidebarGuide(),
      '/git': sidebarGuide(),
      '/general': sidebarGuide(),
      '/soda-for-sparc': sidebarGuide(),
      '/fairshare': sidebarGuide(),
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present | FAIR Data Innovations Hub',
    },
  },
});

function sidebarGuide() {
  return [
    {
      text: 'README',
      items: [
        { text: 'Overview', link: '/docs/overview.md' },
        {
          text: 'About these docs',
          link: '/docs/README.md',
        },
      ],
    },

    {
      text: 'Docs',
      collapsible: true,
      items: [
        {
          text: 'Documentation release procedure',
          link: '/docs/releasing-documentation.md',
        },
        {
          text: 'Semantic versioning',
          link: '/docs/semantic-versioning.md',
        },
      ],
    },

    {
      text: 'Git',
      collapsible: true,
      items: [
        { text: 'Commits on GitHub', link: '/git/commits.md' },
        { text: 'GitHub actions', link: '/git/workflows.md' },
      ],
    },

    {
      text: 'General',
      items: [{ text: 'Commenting code', link: '/general/comments.md' }],
    },

    {
      text: 'SODA for SPARC',
      collapsible: true,
      items: [
        { text: 'Storybook', link: '/soda-for-sparc/storybook.md' },
        { text: 'Icons', link: '/soda-for-sparc/icons.md' },
        {
          text: 'Build instructions',
          link: '/soda-for-sparc/build-soda.md',
        },
        {
          text: 'Release procedure',
          link: '/soda-for-sparc/soda-release.md',
        },
      ],
    },

    {
      text: 'FAIRshare',
      collapsible: true,
      items: [
        { text: 'Storybook', link: '/fairshare/storybook.md' },
        { text: 'Icons', link: '/fairshare/icons.md' },
        {
          text: 'Build instructions',
          link: '/fairshare/build-fairshare.md',
        },
        {
          text: 'Release procedure',
          link: '/fairshare/fairshare-release.md',
        },
      ],
    },
  ];
}
