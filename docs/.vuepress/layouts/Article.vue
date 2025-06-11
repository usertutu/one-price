<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/MarkDown.vue'

const articles = useBlogType('article')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList
          data="
### 前端打包过程源码解析
https://zhuanlan.zhihu.com/p/4050459008
### 前端开发中有什么经典的轮子值得自己去实现一遍？
https://www.zhihu.com/question/29380608
### useEffect监听了很多变量怎么办？
https://www.zhihu.com/question/483540101/answer/1888279405220066736
"
        />
      </main>
    </template>
  </ParentLayout>
</template>
