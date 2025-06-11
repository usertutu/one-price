<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/MarkDown.vue'

const timelines = useBlogType('timeline')
</script>

<template>
  <ParentLayout>
    <template #page>
      <ArticleList />
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.timeline-title {
  padding-top: calc(var(--navbar-height) + 1rem) !important;
  text-align: center;
}
</style>
