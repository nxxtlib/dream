<template>
  <header class="flex py-8 justify-between items-center">
    <core-logo />

    <core-input placeholder="Search..." v-on:input="search($router, $event.target.value)" />
  </header>
</template>

<script>
  export default { methods: { search: (router, value) => router.push(`/${value}`) } }
</script>
