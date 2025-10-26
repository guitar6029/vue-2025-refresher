<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { useMiniTimerStore } from '../stores/miniTimer/useMiniTimerStore';
import { toast } from 'vue3-toastify'

const task = reactive({
    taskName: "",
    taskTime: 1,
    customTime: null
})

const miniTimerStore = useMiniTimerStore();


const canSubmit = computed(() => {
    const taskName = task.taskName.trim().length > 0;
    const timeChosen =
        (typeof task.customTime === 'number' && task.customTime > 0) ||
        (typeof task.taskTime === 'number' && task.taskTime > 0)
    return taskName && timeChosen
})



const handleAddSchedule = () => {
    console.log(`Task : ${task.taskName} , Time : ${task.taskTime} , Custom Time : ${task.customTime}`)

    // first check if which time was chosem (radio or custom)
    const time = task.taskTime ? task.taskTime : task.customTime ? task.customTime : 1

    //call the store to push to mini timer store
    miniTimerStore.addToMiniTasks({ taskName: task.taskName, taskTime: time })


    //add toast
    toast.success(`Added ${task.taskName} to mini timer`, {
        //toastClassName: "alert flex items-center gap-2 min-w-[300px]",
        autoClose: 2000,
    });

    //clear the task
    task.taskName = "";
    task.taskTime = 1;
    task.customTime = null;
}
</script>

<template>
    <main class="min-h-screen flex flex-col justify-center gap-2 mx-auto">
        <form class="card card-border p-4 shadow-sm gap-2" @submit.prevent="handleAddSchedule">
            <h1>Mini Timer</h1>
            <div class="flex flex-col gap-2">
                <input type="text" class="input" placeholder="Add Task Name" v-model="task.taskName">
            </div>
            <div class="flex flex-col gap-2">
                <h3>Select Time</h3>
                <div class="flex items-center gap-2">

                    <div class="flex items-center gap-2">
                        <input type="radio" class="radio" :value="1" v-model.number="task.taskTime" />
                        <label for="scheduleTime">1 min</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" class="radio" :value="5" v-model.number="task.taskTime" />
                        <label for="scheduleTime">5 min</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" class="radio" :value="10" v-model.number="task.taskTime" />
                        <label for="scheduleTime">10 min</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" class="radio" :value="15" v-model.number="task.taskTime" />
                        <label for="scheduleTime">15 min</label>
                    </div>

                </div>
                <div class="flex flex-col gap-2">
                    <label for="scheduleTime">Custom Time</label>
                    <input type="number" min="1" max="600" class="input" v-model.number="task.customTime" />
                </div>
                <button :disabled="!canSubmit" type="submit" class="btn">Add
                    Schedule</button>
            </div>
        </form>
    </main>

</template>