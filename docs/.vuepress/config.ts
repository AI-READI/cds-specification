import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "Hello VuePress",
  description: "Just playing around",

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
            children: [
              {
                text: "Type",
                link: "#type",
              },
              {
                text: "Type values allowed",
                link: "#type-values-allowed",
              },
            ],
          },
        ],
      },
    ],
  }),
});
