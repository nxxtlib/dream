<template>
  <component :is="component" :to="to" :class="clazz">
    <slot />
  </component>
</template>

<script>
  export default {
    props: ['to', 'kind'],

    computed: {
      component: ({ to, kind }) => {
        if (to) return 'nuxt-link'

        if (kind == 'title.1') return 'h1'
        if (kind == 'title.2') return 'h2'
        if (kind == 'title.3') return 'h3'

        return 'p'
      },

      clazz: ({ kind }) => {
        if (kind == 'title.1') return 'text-xl font-bold'
        if (kind == 'title.2') return 'text-lg font-bold'
        if (kind == 'title.3') return 'text-md font-bold'
      }
    }
  }
</script>
