import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: 'Developer Documentation',
    description: 'Documentation for CDS-Specification',
    titleTemplate: 'AI-READI',
    port: 3000,

    appearance: true,
    lastUpdated: true,
    ignoreDeadLinks: false,

    markdown: {
      lineNumbers: true,
    },

    mermaid: {},

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
      [
        'script',
        {
          src: 'https://umami.fairdataihub.org/mushroom',
          crossorigin: 'anonymous',
          async: true,
          defer: true,
          'data-website-id': '55e27271-19cf-40c3-b4fa-8951322298b4',
        },
      ],
    ],

    themeConfig: {
      editLink: {
        pattern:
          'https://github.com/fairdataihub/dev.fairdataihub.org/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/AI-READI' }],

      nav: [
        {
          text: 'Overview',
          link: '/docs/overview.md',
        },
        {
          text: 'The CDS Specification',
          link: '/cds-specification/section-1.md',
        },
        {
          text: 'Rationale',
          link: '/rationale/section-1.md',
        },
        {
          text: 'Resources',
          link: '/resources/section-1.md',
        },
      ],

      sidebar: {
        '/docs': sidebarGuide(),
        '/cds-specification': sidebarGuide(),
        '/resources': sidebarGuide(),
        '/rationale': sidebarGuide(),
      },

      footer: {
        message: 'Released under the Apache-2.0 License.',
        copyright: 'Copyright © 2022-present | AI-READI',
      },
    },
  }),
);

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
      text: 'CDS Specification',
      collapsible: true,
      items: [
        { text: 'Section 1', link: '/cds-specification/section-1.md' },
        { text: 'Section 2', link: '/cds-specification/section-2.md' },
        { text: 'Section 3', link: '/cds-specification/section-3.md' },
        { text: 'Section 4', link: '/cds-specification/section-4.md' },
      ],
    },

    {
      text: 'Rationale',
      collapsible: true,
      items: [
        { text: 'Section 1', link: '/rationale/section-1.md' },
        { text: 'Section 2', link: '/rationale/section-2.md' },
        {
          text: 'Section 3',
          link: '/rationale/section-3.md',
        },
      ],
    },

    {
      text: 'Resources',
      collapsible: true,
      items: [
        { text: 'Section 1', link: '/resources/section-1.md' },
        { text: 'Section 2', link: '/resources/section-2.md' },
        {
          text: 'Section 3',
          link: '/resources/section-3.md',
        },
        {
          text: 'Section 4',
          link: '/resources/section-4.md',
        },
      ],
    },
  ];
}
