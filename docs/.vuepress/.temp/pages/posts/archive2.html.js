import comp from "/Users/usertutu/vuepress-starter/docs/.vuepress/.temp/pages/posts/archive2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive2.html\",\"title\":\"Archive Article2\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"1998-01-02T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"WWII\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1748269533000,\"contributors\":[{\"name\":\"useryy\",\"username\":\"useryy\",\"email\":\"484027291@qq.com\",\"commits\":1,\"url\":\"https://github.com/useryy\"}],\"changelog\":[{\"hash\":\"a1ebc9e52aeb69b1b12cef03aeed779e1efa6ec4\",\"time\":1748269533000,\"email\":\"484027291@qq.com\",\"author\":\"useryy\",\"message\":\"feat:1\"}]},\"filePathRelative\":\"posts/archive2.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
