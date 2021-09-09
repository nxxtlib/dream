<template>
  <nuxt />
</template>

<style>
  @font-face {
    font-family: kodchasan;
    font-weight: 200;
    src: url('~/asset/font.light.ttf');
  }

  @font-face {
    font-family: kodchasan;
    font-weight: 400;
    src: url('~/asset/font.normal.ttf');
  }

  @font-face {
    font-family: kodchasan;
    font-weight: 600;
    src: url('~/asset/font.bold.ttf');
  }

  ::-webkit-scrollbar {
    @apply h-4 w-4;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-clip-content border-solid border-transparent rounded-lg bg-pink-400 border-4;
  }

  ::-webkit-scrollbar-corner {
    @apply bg-transparent;
  }

  ::selection {
    @apply bg-pink-400 bg-opacity-40;
  }

  :focus-visible {
    @apply outline-none ring-2 ring-pink-600;
  }

  * {
    @apply cursor-default;
    scrollbar-color: rgb(244, 114, 182) transparent;
  }

  body {
    @apply bg-pink-200 text-sm text-pink-800 overflow-x-hidden overflow-y-scroll;
  }

  .nuxt-progress {
    @apply bg-clip-content border-solid border-transparent rounded-lg bg-pink-400 border-4 h-4;
  }

  .page-enter-active,
  .page-leave-active {
    @apply transition-opacity duration-300;
  }

  .page-enter,
  .page-leave-active {
    @apply opacity-0;
  }
</style>
