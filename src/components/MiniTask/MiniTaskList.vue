<script lang="ts" setup>
import type { MiniTaskWithTimeStamp } from '../../types/MiniTask';
import MiniTask from './MiniTask.vue';


defineProps<{
    tasks: MiniTaskWithTimeStamp[]
    zenMode: boolean
}>();

</script>

<template>
    <div class="overflow-y-auto max-h-[80%]">
        <ul v-if="tasks.length > 0" class="list bg-base-100 rounded-box shadow-md gap-2">
            <li v-for="task in tasks" :key="task.id" class="list-row flex items-center justify-between border-2 ">
                <MiniTask :zenMode="zenMode" :task="task" />
            </li>
        </ul>
        <div v-else>No tasks</div>
    </div>
</template>