import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'Fengmao UI',
  description: 'fengmao-ui组件库',
  lang: 'cn-ZH',
  base: '/fengmao-ui/',
  head: [
    // 网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
    // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '',
    siteTitle: '',
    outline: 3,
    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/wocwin/fengmao-ui' },
    ],

    algolia: {
      // algolia 搜索服务 与 内置 search 可二选一
      appId: 'SHDNEYGA8Z',
      apiKey: '91419401b0b0efd31b610e54e5b97249',
      indexName: 'vue-amazing-ui',
    },
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/TSelect/base.md' },
      {
        text: 'Gitee码云地址',
        link: 'https://e.gitee.com/guizhou-fengmao-logistics/repos/guizhou-fengmao-logistics/fengmao-ui-component-library/sources',
      },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: '下拉选择组件', link: '/components/TSelect/base.md' },
            { text: '详情组件', link: '/components/TDetail/base.md' },
            { text: 'Button组件', link: '/components/TButton/base.md' },
            { text: '日期组件', link: '/components/TDatePicker/base.md' },
            { text: '步骤组件', link: '/components/TStepWizard/base.md' },
          ],
        },
        {
          text: '复杂组件',
          items: [
            {
              text: '下拉选择表格组件',
              link: '/components/TSelectTable/base.md',
            },
            {
              text: 'TAdaptivePage组件',
              link: '/components/TAdaptivePage/base.md',
            },
            {
              text: '条件查询组件',
              link: '/components/TQueryCondition/base.md',
            },
            { text: '表单组件', link: '/components/TForm/base.md' },
            { text: '模块表单组件', link: '/components/TModuleForm/base.md' },
            { text: 'table组件', link: '/components/TTable/base.md' },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
