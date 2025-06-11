import comp from "C:/Users/ADMIN/Desktop/123/one-price/docs/.vuepress/.temp/pages/posts/test.html.vue"
const data = JSON.parse("{\"path\":\"/posts/test.html\",\"title\":\"Test\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"1998-01-01T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"WWI\"],\"archive\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/test.md\",\"excerpt\":\"\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
