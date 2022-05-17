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
            children: [
              {
                text: "Git Hooks",
                link: "#git-hooks",
              },
              {
                text: "Summary",
                link: "#summary",
              },
              {
                text: "Types allowed",
                link: "#type",
              },
              {
                text: "Scope",
                link: "#scope",
              },
              {
                text: "Emoji",
                link: "#emoji",
              },
            ],
          },
          {
            text: "Workflows",
            link: "/git/workflows",
            children: [
              {
                text: "Lint and format",
                link: "#lint-and-format",
              },
              {
                text: "Mispellings",
                link: "#mispellings",
              },
              {
                text: "Greetings",
                link: "#greetings",
              },
              {
                text: "Stale issues and PRs",
                link: "#stale-issues-and-prs",
              },
              {
                text: "Conventional commits",
                link: "#conventional-commits",
              },
              {
                text: "Code quality checks",
                link: "#code-quality-checks",
              },
            ],
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
