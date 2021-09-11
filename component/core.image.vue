<template>
  <nuxt-link v-if="to" :to="to" class="flex flex-shrink-0 h-44 p-2 w-64">
    <img
      :src="require(`~/asset/${name}`)"
      class="rounded-lg h-full object-cover w-full ring-8 ring-primary-400"
    />
  </nuxt-link>

  <figure v-else class="p-2">
    <img
      :src="require(`~/asset/${name}`)"
      class="rounded-lg h-full object-cover w-full ring-8 ring-primary-400"
    />
  </figure>
</template>

<script>
  export default { props: ['to', 'name'] }
</script>
