<template>
  <component :is="component" :to="to" :class="`flex-shrink-0 p-2`">
    <img
      :src="require(`~/asset/${name}`)"
      class="rounded-lg h-full object-cover w-full ring-8 ring-primary-400"
    />
  </component>
</template>

<script>
  export default {
    props: ['to', 'name', 'size'],

    computed: {
      component: ({ to }) => (to ? 'nuxt-link' : 'figure'),
      clazz: ({ size }) => (size == 'small' ? 'h-44 w-64' : 'h-full w-full')
    }
  }
</script>
