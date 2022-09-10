import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '两千年文档',
  description: '左版·风云世纪两千年 文档',
  
  theme: defaultTheme({
    docsRepo: 'https://github.com/Cccc-owo/fysjlqn-doc',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    navbar: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '文档',
        children: ['/contents/common', '/contents/decisions', '/contents/events', '/contents/history', '/contents/missions']
      },
      {
        text: '更新日志',
        link: '/update',
      },
      {
        text: '关于',
        children: ['/about/c.md','/about/'],
      },
      {
        text: '贴吧',
        link: 'https://tieba.baidu.com/f?kw=%E5%B7%A6%E7%89%88%E9%A3%8E%E4%BA%91%E4%B8%96%E7%BA%AA%E4%B8%A4%E5%8D%83%E5%B9%B4',
      },
      {
        text: '我的博客',
        link: 'https://blog.iscccc.eu.org',
      },
    ],
    logo: '/images/icon.png',
    repo: 'Cccc-owo/fysjlqn-doc',
    editLinkText: '在 GitHub 上编辑此页',
    backToHome: '你好像走丢了，点我回到主页',
  }),
  
  plugins:
    [docsearchPlugin({
      apiKey: '0487d7858b35674657999dee369620b0',
      indexName: 'prod_search',
      appId: '20N99BK25Z',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
        },
      },
    }),
  ],
  
  head: [
      ['link', {
         rel: 'icon',
         href: '/images/icon.png'
      }]
    ],
})
