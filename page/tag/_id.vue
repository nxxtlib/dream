<template>
  <layout-content>
    <header class="flex flex-col gap-1">
      <core-line kind="title.1" class="capitalize">{{ tag.name }}</core-line>
      <core-line>{{ tag.desc }}</core-line>
    </header>

    <core-divider />

    <widget-article v-for="article in articles" :key="article.path" :article="article" />
  </layout-content>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const tags = await $content()
        .only(['id', 'name', 'link'])
        .where({ kind: 'tag' })
        .fetch()

      const articles = (
        await $content()
          .only(['id', 'cover', 'title', 'summary', 'date', 'readtime', 'link', 'tags'])
          .where({ kind: 'article', tags: { $contains: +params.id } })
          .sortBy('date', 'desc')
          .fetch()
      ).map(i => ({ ...i, tags: tags.filter(({ id }) => i.tags.includes(+id)) }))

      const tag = (
        await $content()
          .only(['id', 'name', 'desc', 'cover'])
          .where({ kind: 'tag', id: params.id })
          .fetch()
      )[0]

      return { tag, articles }
    }
  }
</script>
