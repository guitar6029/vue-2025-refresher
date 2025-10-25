<script lang="ts" setup>
import type { Task } from '../types';

const props = defineProps<{
    task: Task
}>()
</script>

<template>
    <span :class="['text-upppercase', {'completed': props.task.completed} ]">{{ props.task.title }} </span>
</template>


<style scoped>

.completed {
    text-decoration: line-through;
}

</style>