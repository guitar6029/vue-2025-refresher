<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
    addTask: [newTask: string]
}>();
const error = ref("");

const onSubmit = () => {
    if (newTask.value.trim() === "") {
        error.value = "Task cannot be empty.";
        return;
    }
    emit('addTask', newTask.value.trim());
    //clear the form
    newTask.value = "";
    error.value = "";
}

const newTask = ref("");
</script>

<template>
    <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
        <label class="label" for="newTask">New Task</label>
        <input class="input" name="newTask" :aria-invalid="!!error || undefined" v-model="newTask" @input="error = ''">
        <span v-if="error">Task cannot be empty.</span>
        <div class="button-container">
            <button class="btn" type="submit">Add</button>
        </div>
    </form>

</template>

<style scoped>
.button-container {
    display: flex;
    justify-content: end;
}

.button-action {
    width: fit-content;
}
</style>