import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: '两千年文档',
  description: '左版·风云世纪两千年 文档',
  
  base: "/",

  theme,

  shouldPrefetch: false,
});
