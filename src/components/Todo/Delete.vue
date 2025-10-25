<script lang="ts" setup>

const emit = defineEmits<{
    onDelete: []
}>();

</script>

<template>
    <button @click="emit('onDelete')">Delete</button>
</template>