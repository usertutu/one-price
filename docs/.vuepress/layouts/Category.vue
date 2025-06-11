<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { RouteLink, useRoutePath } from 'vuepress/client'
import ArticleList from '../components/MarkDown.vue'

const categoryMap = useBlogCategory('category')
const routePath = useRoutePath()
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList data="123" />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';


</style>
