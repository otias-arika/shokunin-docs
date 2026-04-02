import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '職人.new',
  description: '建設AIアシスタント あずさ',
  lang: 'ja',
  base: '/shokunin-docs/',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'はじめに', link: '/guide/introduction' },
      { text: 'マニュアル', link: '/manual/for-worker' },
      { text: '機能一覧', link: '/features/overview' },
    ],
    sidebar: [
      {
        text: 'ガイド',
        items: [
          { text: '職人.new とは', link: '/guide/introduction' },
          { text: 'はじめ方', link: '/guide/getting-started' },
          { text: 'アップデート予定', link: '/guide/roadmap' },
        ]
      },
      {
        text: 'マニュアル',
        items: [
          { text: '職人さん向け', link: '/manual/for-worker' },
          { text: '現場管理者向け', link: '/manual/for-manager' },
        ]
      },
      {
        text: '機能説明',
        items: [
          { text: '機能一覧', link: '/features/overview' },
        ]
      }
    ],
    footer: {
      message: 'Powered by 職人.new',
      copyright: '© 2025 職人.new All rights reserved.'
    },
    search: { provider: 'local' }
  }
})
