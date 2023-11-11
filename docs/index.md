---
layout: home

title: fengmao-ui
# titleTemplate: 选项卡描述
editLink: true
lastUpdated: true
hero:
  name: fengmao-ui
  text: Vue3基础组件
  tagline: Vue3 中基于Element-plus二次封装基础组件文档
  image:
    src: /img/hero.jpg
    alt: fengmao-ui
  actions:
    - theme: brand
      text: 安装
      link: /components/
    - theme: brand
      text: 组件库
      link: /components/TSelect/base.md
features:
  # - icon: 🔨
  #   title: 实际项目
  #   details: 实际项目中碰到的疑点、难点，致力于更优的自我。。
  - icon: 🧩
    title: 基础组件
    details: 基于Element-plus二次封装；使用组件 Demo 快速体验交互细节。。
  - icon: ✈️
    title: Vue驱动。
    details: 享受 Vue3 + vite3 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
---

<p style="display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;">
  
</p>
<h1 style="text-align: center;">Thanks to all the contributors!</h1>

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'
 
onMounted(() => {
  fetchVersion()
})
</script>
