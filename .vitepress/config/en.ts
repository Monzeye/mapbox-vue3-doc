import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/zh/core-concepts/',
        activeMatch: '^/zh/core-concepts/',
      },
    ],
    sidebar: {}
  }
}