<template>
  <nuxt-link :to="to" class="rounded-lg font-bold bg-pink-300 text-xs py-1 px-2 text-pink-600">
    <slot />
  </nuxt-link>
</template>

<script>
  export default {
    props: ['to']
  }
</script>
