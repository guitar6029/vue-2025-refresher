<script lang="ts" setup>
const props = defineProps<{
    tasksCompleted: number
    tasksTotal: number
}>()
</script>


<template>
    <h3>Tasks Completed {{  tasksCompleted }} / {{  tasksTotal }}</h3>
</template>