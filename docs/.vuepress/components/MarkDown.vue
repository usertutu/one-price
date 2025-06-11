<script setup>
import { ref, computed, defineProps } from 'vue'
import MarkdownIt from 'markdown-it'

// 定义 props 并获取值
const props = defineProps({
  data: String, // 字符串类型
})

console.log(props.data) // 使用 props
// 1. 响应式数据声明（替代 data()）
const md = new MarkdownIt() // 直接初始化（无需 return 暴露）[3](@ref)

// 2. 计算属性（替代 computed 选项）
const compiledMarkdown = computed(() => {
  return md.render(props.data || '') // 注意用 .value 访问 ref[1,6](@ref)
})
</script>

<template>
  <div v-html="compiledMarkdown"></div>
</template>

<style lang="scss"></style>
