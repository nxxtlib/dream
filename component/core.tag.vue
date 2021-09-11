<template>
  <nuxt-link :to="to" class="rounded-lg font-bold bg-primary-300 text-xs py-1 px-2 text-primary-600">
    <slot />
  </nuxt-link>
</template>

<script>
  export default {
    props: ['to']
  }
</script>
