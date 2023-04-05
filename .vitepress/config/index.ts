

import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { zhConfig } from './zh'

export default defineConfig({
  base: '/mapbox-vue3-doc/',
  lang: 'en-US',
  title: 'Mapbox vue3',
  description: '一个基于Vue3+Typescript封装的Mapbox地图组件',
  locales: {
    root: { label: '简体中文', lang: 'zh-CN', link: '/', ...zhConfig },
    en: { label: 'English', lang: 'en-US', link: '/en/', ...enConfig },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Monzeye/mapbox-vue3' },
    ],
  }
})