<script lang="ts" setup>

const props = defineProps<{
    completed: boolean
}>()


const emit = defineEmits<{
    onComplete: []
}>();

</script>

<template>
    <input type="checkbox" :checked="props.completed" @click="emit('onComplete')" />
</template>