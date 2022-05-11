import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "Hello VuePress",
  description: "Just playing around",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
    ],
    // sidebar array
    // all pages will use the same sidebar
    sidebar: [
      // SidebarItem
      {
        text: "Foo",
        link: "/foo/",
        children: [
          // SidebarItem
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },
          // string - page file path
          "/foo/bar.md",
        ],
      },
      // string - page file path
      "/bar/README.md",
    ],
  }),
});
