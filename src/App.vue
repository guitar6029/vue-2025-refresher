<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from './components/Header/Navigation.vue';
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<template>
  <main :color-theme="isDark ? 'dark' : 'light'" class="min-h-screen flex flex-col">
    <Navigation />
    <RouterView />
  </main>
</template>

<style scoped></style>