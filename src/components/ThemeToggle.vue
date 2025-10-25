<!-- ThemeToggle.vue -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import Button from '../ui/Button.vue'

// start however you want
const theme = ref<'light' | 'synthwave'>('light')

watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
})

function toggleTheme() {
    theme.value = theme.value === 'light' ? 'synthwave' : 'light'
}
</script>

<template>
    <Button @click="toggleTheme">
        <component :is="theme === 'light' ? Moon : Sun" class="w-5 h-5" />
    </Button>
</template>
