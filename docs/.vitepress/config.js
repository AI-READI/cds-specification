import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: 'CDS Documentation',
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
          'https://github.com/AI-READI/cds-specification/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/AI-READI' }],

      nav: [
        {
          text: 'Introduction to the CDS',
          link: '/docs/intro.md',
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
          link: '/resources/changelog.md',
        },
      ],

      sidebar: {
        '/docs': sidebarGuide(),
        '/cds-specification': sidebarGuide(),
        '/implementing-cds': sidebarGuide(),
        '/resources': sidebarGuide(),
        '/rationale': sidebarGuide(),
      },

      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-present | AI-READI',
      },
    },
  }),
);

function sidebarGuide() {
  return [
    {
      text: 'Getting Started',
      collapsible: true,
      items: [
        { text: 'Introduction to the CDS', link: '/docs/intro.md' },
        {
          text: 'About this documentation',
          link: '/docs/about.md',
        },
        {
          text: 'How to reference the CDS',
          link: '/docs/referencing.md',
        },
      ],
    },

    {
      text: 'CDS Specification',
      collapsible: true,
      items: [
        {
          text: 'General principles',
          link: '/cds-specification/general-principles.md',
        },
        {
          text: 'Folder structure',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/cds-specification/folder-structure/overview.md',
            },
            {
              text: 'Data type dictionary',
              link: '/cds-specification/folder-structure/data-type-dictionary.md',
            },
          ],
        },
        {
          text: 'Metadata files',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/cds-specification/metadata-files/overview.md',
            },
            {
              text: 'README.md',
              link: '/cds-specification/metadata-files/readme.md',
            },
            {
              text: 'datasheet.md',
              link: '/cds-specification/metadata-files/datasheet.md',
            },
            {
              text: 'study_description.json',
              link: '/cds-specification/metadata-files/study-description.md',
            },
            {
              text: 'dataset_description.json',
              link: '/cds-specification/metadata-files/dataset-description.md',
            },
            {
              text: 'participants',
              link: '/cds-specification/metadata-files/participants.md',
            },
            {
              text: 'LICENSE.txt',
              link: '/cds-specification/metadata-files/license.md',
            },
            {
              text: 'CHANGELOG.md',
              link: '/cds-specification/metadata-files/changelog.md',
            },
          ],
        },
      ],
    },

    {
      text: 'Implementing the CDS',
      collapsible: true,
      items: [
        {
          text: 'Step-by-Step Guide',
          link: '/implementing-cds/step-by-step-guide.md',
        },
        {
          text: 'Examples',
          link: '/implementing-cds/examples.md',
        },
      ],
    },

    {
      text: 'Design Rationale',
      collapsible: true,
      items: [
        { text: 'Overview', link: '/design-rationale/overview.md' },
        {
          text: 'Folder structure',
          link: '/design-rationale/folder-structure.md',
        },
        {
          text: 'Metadata files',
          link: '/design-rationale/metadata-files.md',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/cds-specification/design-rationale/overview.md',
            },
            {
              text: 'README.md',
              link: '/cds-specification/design-rationale/readme.md',
            },
            {
              text: 'datasheet.md',
              link: '/cds-specification/design-rationale/datasheet.md',
            },
            {
              text: 'study_description.json',
              link: '/cds-specification/design-rationale/study-description.md',
            },
            {
              text: 'dataset_description.json',
              link: '/cds-specification/design-rationale/dataset-description.md',
            },
            {
              text: 'participants',
              link: '/cds-specification/design-rationale/participants.md',
            },
            {
              text: 'LICENSE.txt',
              link: '/cds-specification/design-rationale/license.md',
            },
            {
              text: 'CHANGELOG.md',
              link: '/cds-specification/design-rationale/changelog.md',
            },
            {
              text: 'CHANGELOG.md',
              link: '/cds-specification/design-rationale/metadata-elements.md',
            },
          ],
        },
      ],
    },

    {
      text: 'Resources',
      collapsible: true,
      items: [
        { text: 'Changelog', link: '/resources/changelog.md' },
        {
          text: 'Governance',
          link: '/resources/governance.md',
        },
        {
          text: 'Contributing/Feedback',
          link: '/docresourcess/contributing.md',
        },
      ],
    },
  ];
}
