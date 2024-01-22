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
          link: '/specification/general-principles.md',
        },
        {
          text: 'Resources',
          link: '/resources/changelog.md',
        },
      ],

      sidebar: {
        '/docs': sidebarGuide(),
        '/specification': sidebarGuide(),
        '/implementing-cds': sidebarGuide(),
        '/design-rationale': sidebarGuide(),
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
          link: '/specification/general-principles.md',
        },
        {
          text: 'Folder structure',
          link: '/specification/folder-structure.md',
        },
        {
          text: 'Metadata files',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'README.md',
              link: '/specification/metadata-files/readme.md',
            },
            {
              text: 'LICENSE.txt',
              link: '/specification/metadata-files/license.md',
            },
            {
              text: 'healthsheet.md',
              link: '/specification/metadata-files/healthsheet.md',
            },
            {
              text: 'study_description.json',
              link: '/specification/metadata-files/study-description.md',
            },
            {
              text: 'dataset_description.json',
              link: '/specification/metadata-files/dataset-description.md',
            },
            {
              text: 'datatype_dictionary.yaml',
              link: '/specification/metadata-files/datatype-dictionary.md',
            },
            {
              text: 'participants.tsv and .json',
              link: '/specification/metadata-files/participants.md',
            },
            {
              text: 'CHANGELOG.md',
              link: '/specification/metadata-files/changelog.md',
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
          text: 'Templates',
          link: '/implementing-cds/templates.md',
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
          text: 'General principles',
          link: '/design-rationale/general-principles.md',
        },
        {
          text: 'Folder naming',
          link: '/design-rationale/folder-naming.md',
        },
        {
          text: 'Metadata files',
          link: '/design-rationale/metadata-files.md',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/design-rationale/metadata-files/overview.md',
            },
            {
              text: 'README.md',
              link: '/design-rationale/metadata-files/readme.md',
            },
            {
              text: 'LICENSE.txt',
              link: '/design-rationale/metadata-files/license.md',
            },
            {
              text: 'healthsheet.md',
              link: '/design-rationale/metadata-files/healthsheet.md',
            },
            {
              text: 'study_description.json',
              link: '/design-rationale/metadata-files/study-description.md',
            },
            {
              text: 'dataset_description.json',
              link: '/design-rationale/metadata-files/dataset-description.md',
            },
            {
              text: 'datatype_dictionary.yaml',
              link: '/design-rationale/metadata-files/datatype-dictionary.md',
            },
            {
              text: 'participants.tsv and .json',
              link: '/design-rationale/metadata-files/participants.md',
            },
            {
              text: 'CHANGELOG.md',
              link: '/design-rationale/metadata-files/changelog.md',
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
          link: '/resources/contributing.md',
        },
      ],
    },
  ];
}
