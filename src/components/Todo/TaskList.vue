<script setup lang="ts">
import type { Task } from '../../types';
import Delete from './Delete.vue';
import Completed from './Complete.vue';
import TasksHeader from "../../components/Todo/TasksHeader.vue";
import TaskItem from './TaskItem.vue';
import { computed } from 'vue';

const emit = defineEmits<{
    onDelete: [id: string],
    onComplete: [id: string]
}>();


//define props for the task list
const props = defineProps<{
    tasks: Task[]
}>();


const getCompletedTasks = computed(() => {
    return props.tasks.filter(task => task.completed).length;
})

const getTotalTasks = computed(() => {
    return props.tasks.length
})

</script>

<template>
    <span v-if="tasks.length === 0">No tasks.</span>
    <div>
        <TasksHeader :tasksCompleted="getCompletedTasks" :tasksTotal="getTotalTasks" />
        <ul>
            <TransitionGroup name="list" tag="ul">
                <li class="task-item" v-for="task in props.tasks" :key="task.id">
                    <div class="flex items-center gap-2">
                        <Completed :completed="task.completed" @on-complete="emit('onComplete', task.id)" />
                        <TaskItem :task="task" />
                    </div>
                    <div class="task-right-side">
                        <Delete :id="task.id" @on-delete="emit('onDelete', task.id)" />
                    </div>

                </li>
            </TransitionGroup>
        </ul>
    </div>
</template>

<style scoped>
.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
}


.task-right-side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>