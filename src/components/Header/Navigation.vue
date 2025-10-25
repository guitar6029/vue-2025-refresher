<script lang="ts" setup>
import ThemeToggle from '../ThemeToggle.vue'
</script>

<template>
    <header class="flex items-center justify-end gap-2 p-2">
        <nav class="flex items-center gap-2">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/mini-timer">Mini Timer</RouterLink>
            <RouterLink to="/todo">Todo</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <ThemeToggle />

    </header>
</template>