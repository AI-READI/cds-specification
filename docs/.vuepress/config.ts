import { defineUserConfig, defaultTheme } from "vuepress";

const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");
const { searchPlugin } = require("@vuepress/plugin-search");
// const { pwaPlugin } = require("@vuepress/plugin-pwa");

export default defineUserConfig({
  lang: "en-US",
  title: "Developer Documentation",
  description: "Just playing around",

  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
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
      // {
      //   text: "SODA for SPARC",
      //   link: "/",
      // },
      // {
      //   text: "FAIRshare",
      //   link: "/",
      // },
    ],

    // sidebar: sidebar,

    sidebar: [
      {
        text: "Git",
        children: [
          {
            text: "Commits",
            link: "/git/commits",
          },
          {
            text: "Workflows",
            link: "/git/workflows",
          },
          {
            text: "@fairdataihub",
            link: "https://github.com/fairdataihub",
          },
        ],
      },
      {
        text: "General",
        link: "/general/",
        children: [
          {
            text: "Comments",
            link: "/general/comments",
          },
        ],
      },
    ],
  }),
});
