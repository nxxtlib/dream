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
    asyncData: async ({ $db, params }) => ({
      tag: await $db.tag(params.id),
      articles: await $db.articles()
    })
  }
</script>
