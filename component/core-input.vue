<template>
  <input
    type="text"
    placeholder="Search..."
    class="rounded-lg bg-pink-300 bg-opacity-50 py-2 px-4 placeholder-pink-800 placeholder-opacity-40"
    v-on:input="$emit('input', $event)"
  />
</template>
