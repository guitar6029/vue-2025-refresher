<script lang="ts" setup>

const props = defineProps<{
    completed: boolean
}>()


const emit = defineEmits<{
    onComplete: []
}>();

</script>

<template>
    <button @click="emit('onComplete')">{{ props.completed ? 'Uncomplete' : 'Complete' }}</button>
</template>