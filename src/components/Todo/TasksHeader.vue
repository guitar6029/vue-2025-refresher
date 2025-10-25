<script lang="ts" setup>
const props = defineProps<{
    tasksCompleted: number
    tasksTotal: number
}>()
</script>


<template>
    <h3>Tasks Completed {{  props.tasksCompleted }} / {{  props.tasksTotal }}</h3>
</template>