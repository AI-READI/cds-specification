import { defineConfig } from 'vitepress';
import MermaidPlugin from 'vitepress-plugin-mermaid';

export default defineConfig({
  lang: 'en-US',
  title: 'Developer Documentation',
  description: 'Documentation for FAIR Data Innovations Hub developers',
  titleTemplate: 'FAIR Data Innovations Hub',
  port: 3000,

  appearance: true,
  lastUpdated: true,

  markdown: {
    lineNumbers: false,
    config: MermaidPlugin,
  },

  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',

        href: 'favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: 'site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: 'safari-pinned-tab.svg',
        color: '#3a0839',
      },
    ],
    ['link', { rel: 'shortcut icon', href: 'favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: 'browserconfig.xml',
      },
    ],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],

  themeConfig: {
    // logo: "https://fairdataihub.org/logo.svg",
    // siteTitle: false,

    editLink: {
      pattern:
        'https://github.com/fairdataihub/dev.fairdataihub.org/edit/main/docs/:path',
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
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2021-present | FAIR Data Innovations Hub',
    },
  },
});

function sidebarGuide() {
  return [
    {
      text: 'README',
      collapsible: true,
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

        { text: 'GitLab', link: '/git/gitlab.md' },
      ],
    },

    {
      text: 'General',
      collapsible: true,
      items: [
        { text: 'Commenting code', link: '/general/comments.md' },
        { text: 'Project setup', link: '/general/project-setup.md' },
        { text: '@fairdataihub/config', link: '/general/config.md' },
      ],
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
        {
          text: 'SODA Server',
          link: '/soda-for-sparc/soda-server.md',
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
