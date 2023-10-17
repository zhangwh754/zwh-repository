import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wheel-prsposity",
  description: "Vue3简单组件库，使用pnpm搭建的monorepo仓库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/button/" },
    ],
    sidebar: {
      "/guild/": [
        {
          text: "入门",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button",
              link: "/components/button",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zhangwh754/zwh-repository" },
    ],
  },
});
