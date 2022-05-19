import { defineUserConfig, defaultTheme } from "vuepress";

const { searchPlugin } = require("@vuepress/plugin-search");
const { prismjsPlugin } = require("@vuepress/plugin-prismjs");
// const { pwaPlugin } = require("@vuepress/plugin-pwa");
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  lang: "en-US",
  title: "Developer Documentation",
  description: "Just playing around",

  plugins: [
    prismjsPlugin({}),
    copyCodePlugin({
      pure: true,
    }),
    searchPlugin({
      hotKeys: ["/"],
      // exclude the homepage
      isSearchable: (page) => page.path !== "/",
    }),
    // pwaPlugin({
    //   // options
    // }),
  ],

  markdown: {
    code: {
      lineNumbers: 2,
    },
  },

  theme: defaultTheme({
    editLink: true,
    docsRepo: "https://github.com/fairdataihub/fairdataihub-docs",
    docsBranch: "main",
    docsDir: "docs",

    smoothScroll: true,

    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "@fairdataihub",
        link: "https://github.com/fairdataihub",
      },
      {
        text: "docs",
        link: "/docs/",
      }
    ],

    sidebar: {
      "/": [
        {
          text: "Git",
          children: ["/git/commits.md", "/git/workflows.md"],
        },
        {
          text: "General",
          children: ["/general/comments.md"],
        },
        {
          text: "Build Instructions",
          children: ["/build-instructions/build-soda.md"],
        },
        {
          text: "Release Instructions",
          children: ["/release-instructions/soda-release.md", "/release-instructions/documentation-release.md"],
        },
        {
          text: "Readme",
          children: ["/docs/README.md"],
        }
      ],
    },
  }),
});
