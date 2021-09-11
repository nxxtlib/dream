<template>
  <input
    type="text"
    placeholder="Search..."
    v-on:input="$emit('input', $event)"
    class="rounded-lg bg-primary-300 h-10 w-full px-4 placeholder-primary-500"
  />
</template>
