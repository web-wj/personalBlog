import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";

export default hopeTheme({
  hostname: "https://baidu.com",

  author: {
    name: "Alex Wang",
    url: "https://mrhope.site",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  lastUpdatedText: "上次编辑于",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: "heading",

  footer: "默认页脚",

  displayFooter: true,

  updateTime: true,

  contributor: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "前端开发者，使用 vue、uniapp 等技术框架",
    intro: "/about/",
    medias: {
      Gitee: "https://gitee.com/web_wj001",
      GitHub: "https://github.com/web-wj",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
