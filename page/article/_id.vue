<template>
  <layout-content>
    <header class="flex flex-col gap-1">
      <core-inline>{{ article.date }} · {{ article.readtime }}</core-inline>
      <core-line kind="title.1">{{ article.title }}</core-line>
      <core-line>{{ article.summary }}</core-line>
    </header>

    <core-image :name="article.cover" class="-my-4" />

    <nuxt-content :document="{ body: article.body }" class="prose prose-sm" />

    <footer class="flex gap-2">
      <core-tag :to="tag.link" :key="tag.id" v-for="tag in article.tags">
        {{ tag.name }}
      </core-tag>
    </footer>
  </layout-content>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = (
        await $content()
          .where({ kind: 'article', id: params.id })
          .only(['id', 'cover', 'title', 'summary', 'date', 'readtime', 'link', 'tags', 'body'])
          .fetch()
      )[0]

      const tags = await $content()
        .where({ kind: 'tag' })
        .only(['id', 'name', 'link'])
        .fetch()

      return {
        article: {
          ...article,
          tags: tags.filter(({ id }) => article.tags.includes(+id))
        }
      }
    }
  }
</script>
