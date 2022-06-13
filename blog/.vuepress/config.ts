import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Alex Wang",
  description: "vuepress-theme-hope 的使用",
  base: "/",
  theme,
});
