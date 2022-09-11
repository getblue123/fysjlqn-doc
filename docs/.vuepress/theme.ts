import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  hostname: "https://2000ydoc.iscccc.eu.org",

  author: {
    name: "Cccc_",
    url: "https://blog.iscccc.eu.org",
  },

  iconAssets: "iconfont",

  logo: "/images/icon.png",

  repo: "Cccc-owo/fysjlqn-doc",
  repoLabel: "GitHub",

  docsDir: "docs/",
  docsBranch: "main",
  docsRepo: "Cccc-owo/fysjlqn-doc",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Powered by Vuepress",

  displayFooter: true,

  pageInfo: ["Author", "Original"],

  encrypt: {
    config: {
  //    "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: false,
    copyCode: {},
    comment: {
      /**
       * Using Giscus
       */
      //provider: "Giscus",
      //repo: "username/repo",
      //repoId: "xxxx",
      //category: "Announcements",
      //categoryId: "xxxx",
   
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://yourwebsite.app",

      /**
       * Using Waline
       */
      //provider: "Waline",
      //serverURL: "https://yqsg-comment.iscccc.eu.org/",
    },

    mdEnhance: {
      enableAll: false,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
})
