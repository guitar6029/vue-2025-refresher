<script lang="ts" setup>
import { ref } from 'vue';
import type { Task } from '../../types';


const message = ref("Tasks");
const tasks = ref<Task[]>([]);


const formSubmitted = (newTask: string) => {
    console.log("newTask :", newTask);
    //add a new task to the tasks array

    tasks.value.push({
        id: crypto.randomUUID(),
        title: newTask,
        completed: false
    })
}


const handleDelete = (id: string) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
}

const handleMarkCompleted = (id: string) => {
    //get the taks id and update the completed value
    tasks.value = tasks.value.map((task: Task) => {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            }
        } else {
            return task
        }
    })
}
</script>

<template>
    <h1>{{ message }}</h1>
    <Form @addTask="formSubmitted" />
    <TaskList :tasks="tasks" @on-delete="handleDelete" @on-complete="handleMarkCompleted" />
</template>