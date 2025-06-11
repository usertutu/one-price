import comp from "C:/Users/ADMIN/Desktop/123/one-price/docs/.vuepress/.temp/pages/posts/sticky.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky.html\",\"title\":\"Sticky Article\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"Category C\"],\"tag\":[\"tag E\"],\"sticky\":true,\"excerpt\":\"<p>A sticky article demo.</p>\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1748269533000,\"contributors\":[{\"name\":\"useryy\",\"username\":\"useryy\",\"email\":\"484027291@qq.com\",\"commits\":1,\"url\":\"https://github.com/useryy\"}],\"changelog\":[{\"hash\":\"a1ebc9e52aeb69b1b12cef03aeed779e1efa6ec4\",\"time\":1748269533000,\"email\":\"484027291@qq.com\",\"author\":\"useryy\",\"message\":\"feat:1\"}]},\"filePathRelative\":\"posts/sticky.md\"}")
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
