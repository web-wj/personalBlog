import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "JS",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
        ],
      },
      {
        text: "TS",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
        ],
      },
      { text: "Vue", icon: "edit", link: "article9" },
      { text: "网络", icon: "edit", link: "article10" },
      { text: "小程序", icon: "edit", link: "article10" },
    ],
  },
  {
    text: "后端",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "NodeJS",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
        ],
      },
    ],
  },
]);
