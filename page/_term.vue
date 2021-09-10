<template>
  <layout-content>
    <widget-article v-for="article in articles" :key="article.path" :article="article" />
  </layout-content>
</template>

<script>
  export default {
    asyncData: async ({ $db, params }) => ({ articles: await $db.articles(params.term) })
  }
</script>
