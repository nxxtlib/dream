<template>
  <input
    type="text"
    placeholder="Search..."
    v-on:input="$emit('input', $event)"
    class="rounded-lg bg-primary-300 py-2 px-4 placeholder-primary-800 placeholder-opacity-60"
  />
</template>
