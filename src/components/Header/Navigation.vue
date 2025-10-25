<script lang="ts" setup>
import { Sun, Moon } from 'lucide-vue-next';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <header class="flex items-center justify-end gap-2 p-2">
        <nav class="flex items-center gap-2">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/todo">Todo</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <button @click="toggleDark()">
            <component :is="isDark ? Sun : Moon" class="w-5 h-5" />
        </button>

    </header>
</template>