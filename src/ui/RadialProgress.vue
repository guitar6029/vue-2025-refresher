<script lang="ts" setup>
defineProps<{
    value: number
    size?: string
    color?: string
}>()
</script>

<template>
    <div class="radial-progress" :class="color || 'text-primary'" role="progressbar" :style="{
        '--value': value,
        '--size': size || '4rem',
        '--thickness': '4px'
    }">
        {{ Math.round(value) }}%
    </div>
</template>
