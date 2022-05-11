import { defineUserConfig, defaultTheme } from "vuepress";

const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");
const { searchPlugin } = require("@vuepress/plugin-search");

export default defineUserConfig({
  lang: "en-US",
  title: "Hello VuePress",
  description: "Just playing around",

  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
    searchPlugin({
      hotKeys: ["/"],
      // exclude the homepage
      isSearchable: (page) => page.path !== "/",
    }),
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
        text: "General",
        link: "/",
      },
      {
        text: "SODA for SPARC",
        link: "/",
      },
      {
        text: "FAIRshare",
        link: "/",
      },
    ],

    // sidebar: sidebar,

    sidebar: [
      {
        text: "GitHub",
        link: "/github/",
        children: [
          {
            text: "@fairdataihub",
            link: "https://github.com/fairdataihub",
          },
          {
            text: "Commits",
            link: "/github/commits",
          },
        ],
      },
    ],
  }),
});
