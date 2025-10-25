<script lang="ts" setup>
import type { Component } from 'vue';

const emit = defineEmits<({
    onClick: []
})>();



const props = withDefaults(
    defineProps<{
        icon?: Component
        text?: string
    }>(),
    {
        text: "Click"
    }
)

</script>

<template>
    <button class="btn" @click="emit('onClick')">
        <component v-if="icon" :is="icon" class="w-5 h-5" />
        <slot>{{ props.text }}</slot>
    </button>
</template>