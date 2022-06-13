import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "edit",
    prefix: "/frontend/",
    children: [
      {
        text: "JS",
        icon: "edit",
        children: [
          { text: "H5 C3", icon: "edit", link: "h5c3/" },
          { text: "Js", icon: "javascript", link: "js/" },
          { text: "React", icon: "react", link: "react/" },
        ],
      },
      {
        text: "TS",
        icon: "edit",
        children: [
          {
            text: "Ts",
            icon: "typescript",
            link: "ts/",
          },
        ],
      },
      {
        text: "Vue",
        icon: "edit",
        children: [
          {
            text: "Vue",
            icon: "vue",
            link: "vue/",
          },
        ],
      },
      { text: "Ng1", icon: "edit", link: "ng1/" },
      { text: "网络", icon: "edit", link: "Network/" },
      { text: "小程序", icon: "edit", link: "minPrograms/" },
    ],
  },
  {
    text: "后端",
    icon: "note",
    prefix: "/backend/",
    children: [
      {
        text: "NodeJS",
        icon: "edit",
        children: [
          { text: "nodejs", icon: "nodeJS", link: "nodejs/" },
          { text: "ssr", icon: "edit", link: "ssr/" },
        ],
      },
    ],
  },
  {
    text: "tools",
    icon: "note",
    prefix: "/tools/",
    children: [
      {
        text: "Cli",
        icon: "edit",
        children: [
          { text: "Cli", icon: "edit", link: "cli/" },
          { text: "Devtools", icon: "edit", link: "devtools/" },
          { text: "GIT", icon: "git", link: "GIT/" },
          { text: "Linux", icon: "linux", link: "linux/" },
          { text: "Vscode", icon: "vscode", link: "vscode/" },
          { text: "Vuepress", icon: "edit", link: "vuepress/" },
          { text: "包管理工具", icon: "npm", link: "包管理工具/" },
        ],
      },
    ],
  },
  {
    text: "reading",
    icon: "note",
    prefix: "/reading/",
    children: [
      {
        text: "reading",
        icon: "edit",
        children: [
          { text: "vue-shared", icon: "edit", link: "vue-shared/" },
        ],
      },
    ],
  },
]);
