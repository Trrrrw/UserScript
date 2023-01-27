import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Trrrre/UserScript',
    base: '/docs/',
    head: [['link', { rel: 'icon', href: 'https://cdn.staticaly.com/gh/Trrrrw/image-hosting@master/images/Avatar.6a6hwam389o0.webp' }]],
    theme: defaultTheme({
        repo: 'Trrrrw/UserScript',
        editLink: false,
        sidebar: {
            '/guide/': [
                {
                  text: '指南',
                  children: ['/guide/README.md', '/guide/list.md','/guide/B站搜索页美化.md'],
                },
              ],
        },
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                link: '/guide/',
            },
            {
                text: '关于',
                link: '/about/',
            },
        ],
    }),
})
