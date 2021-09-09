<template>
  <layout-content>
    <widget-article v-for="article in articles" :key="article.path" :article="article" />
  </layout-content>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const tags = await $content()
        .where({ kind: 'tag' })
        .only(['id', 'name', 'link'])
        .fetch()

      const articles = (
        await $content()
          .where({ kind: 'article' })
          .only(['id', 'cover', 'title', 'summary', 'date', 'readtime', 'link', 'tags'])
          .sortBy('date', 'desc')
          .search(params.term)
          .fetch()
      ).map(i => ({ ...i, tags: tags.filter(({ id }) => i.tags.includes(+id)) }))

      return { articles }
    }
  }
</script>
