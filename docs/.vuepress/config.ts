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
    ],

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
        ],
      },
      {
        text: "General",
        children: [
          {
            text: "Comments",
            link: "/general/comments",
            children: [
              {
                text: "VS Code extensions",
                link: "#editor-support-vs-code",
              },
              {
                text: "Single-line comments",
                link: "#single-line",
              },
              {
                text: "Inline comments",
                link: "#inline",
              },
              {
                text: "Multi-line comments",
                link: "#multi-line-or-block",
              },
              {
                text: "Dos and don'ts",
                link: "#dos-don-ts",
              },
            ],
          },
        ],
      },
    ],
  }),
});
