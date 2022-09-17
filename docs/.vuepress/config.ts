import { defineUserConfig } from "vuepress";
//import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: '两千年文档',
  description: '左版·风云世纪两千年 文档',

  base: "/",

  head: [
    ['link', {
       rel: 'icon',
       href: '/images/icon.png'
    }]
  ],

  theme,

  plugins: [
    //docsearchPlugin({
    //  apiKey: '0487d7858b35674657999dee369620b0',
    //  indexName: 'prod_search',
    //  appId: '20N99BK25Z',
    //  placeholder: '搜索文档',
    //  translations: {
    //    button: {
    //      buttonText: '搜索文档',
    //    },
    //  },
    //}),
  ],

});
