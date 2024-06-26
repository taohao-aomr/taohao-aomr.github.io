import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "浩子博客",
  description: "记录文案",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Test', link: '/test' },
      { text: 'JS', link: '/js' },
      { text: 'VUE', link: '/vue' },
      { text: 'React面试问题', link: '/react' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime Test', link: '/test' },
          { text: 'JS', link: '/js' },
          { text: 'VUE', link: '/vue' },
          { text: 'React面试问题', link: '/react' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
