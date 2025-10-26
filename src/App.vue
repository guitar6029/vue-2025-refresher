<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from './components/Header/Navigation.vue';
import { useDark } from '@vueuse/core'
import Controller from './components/Controller.vue';
const isDark = useDark()
</script>

<template>
  <main :color-theme="isDark ? 'dark' : 'light'" class="min-h-screen overflow-hidden max-h-screen flex flex-col">
    <Navigation />
    <RouterView />
    <Controller />
  </main>
</template>

<style scoped></style>