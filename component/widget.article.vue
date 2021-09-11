<template>
  <article class="flex sm:gap-8 <sm:flex-col <sm:items-center">
    <div class="flex flex-col py-1 gap-1 <sm:order-2 <sm:text-center <sm:items-center">
      <core-inline>{{ article.date }} · {{ article.readtime }}</core-inline>

      <core-line :to="article.link" kind="title.2">{{ article.title }}</core-line>

      <core-line>{{ article.summary }}</core-line>

      <div class="flex flex-wrap my-auto py-2 gap-2">
        <core-tag :to="tag.link" :key="tag.id" v-for="tag in article.tags">
          {{ tag.id }}
        </core-tag>
      </div>
    </div>

    <core-image :to="article.link" :name="article.cover" class="sm:h-44 sm:w-64 <sm:order-1" />
  </article>
</template>

<script>
  export default { props: ['article'] }
</script>
