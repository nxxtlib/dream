<template>
  <article class="flex gap-8">
    <div class="flex flex-col">
      <core-inline>{{ article.date }} · {{ article.readtime }}</core-inline>

      <core-line :to="article.link" kind="title.2">{{ article.title }}</core-line>

      <core-line>{{ article.summary }}</core-line>

      <div class="flex my-auto py-4 gap-2">
        <core-tag :to="tag.link" :key="tag.id" v-for="tag in article.tags">
          {{ tag.name }}
        </core-tag>
      </div>
    </div>

    <core-image :to="article.link" :name="article.cover" />
  </article>
</template>

<script>
  export default { props: ['article'] }
</script>
