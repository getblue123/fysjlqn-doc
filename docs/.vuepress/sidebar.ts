import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    {
      text: '主页',
      icon: 'home',
      link: '/'
    },
    {
      text: '下载&安装',
      icon: 'install',
      link: '/download'
    },
    {
        text: '文档',
        icon: 'creative',
        prefix: '/contents/',
        children: [
          { text: '机制说明', link: 'mechanism', prefix: '/contents/mechanism/', children: [ 'caoyuandiguo.md', 'fenquandu.md', 'gongyehua.md', 'menggudiguo.md', 'rujiao.md', 'shenluo.md', 'wudaishiguo.md', 'yishixingtai.md', 'youmuzhuanzhan.md', 'yuanzhengsunhao.md', 'zhengfu.md' ] },
          { text: '通用设定文档', link: 'common' },
          { text: '决议文档', link: 'decisions' },
          { text: '事件文档', link: 'events' },
          { text: '历史文件文档', link: 'history' },
          { text: '任务文档', link: 'missions' }
        ]
    },
    {
      text: '更新日志',
      icon: 'update',
      link: '/update'
    },
    {
      text: '贡献指南',
      icon: 'community',
      link: '/misc/contribution.md'
    },
    {
      text: '关于',
      icon: 'group',
      children: ['/about/c.md','/about/']
    },
    {
      text: '贴吧',
      icon: 'blog',
      link: 'https://tieba.baidu.com/f?kw=%E5%B7%A6%E7%89%88%E9%A3%8E%E4%BA%91%E4%B8%96%E7%BA%AA%E4%B8%A4%E5%8D%83%E5%B9%B4'
    },
    {
      text: '站长博客',
      icon: 'profile',
      link: 'https://blog.iscccc.eu.org'
    },
    
]);
