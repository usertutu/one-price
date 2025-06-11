<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { RouteLink, useRoutePath } from 'vuepress/client'
import ArticleList from '../components/MarkDown.vue'

const tagMap = useBlogCategory('tag')
console.log('tagMap', tagMap.map)

const routePath = useRoutePath()
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="tag-wrapper">
          <RouteLink
            v-for="({ items, path }, name) in tagMap.map"
            :key="name"
            :to="path"
            :active="routePath === path"
            class="tag"
          >
            {{ name }}
            <span class="tag-num">
              {{ items.length }}
            </span>
          </RouteLink>
        </div>

        <ArticleList />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';


</style>
