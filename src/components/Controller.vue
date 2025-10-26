<script lang="ts" setup>
import { CircleX as Close } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { useMiniTimerStore } from '../stores/miniTimer/useMiniTimerStore';
import MultiTaskList from './MiniTask/MiniTaskList.vue';
import ZenMode from './ZenMode.vue';

const miniTasksStore = useMiniTimerStore();
const tasks = computed(() => miniTasksStore.getMiniTasks);
const isModalOpen = ref(false);
const zenMode = ref(false);

const handleModal = () => {
    isModalOpen.value = !isModalOpen.value;
}

const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
}

</script>


<template>
    <!-- Fade the backdrop -->
    <Transition name="fade">
        <div v-if="isModalOpen" class="fixed inset-0 z-40 bg-base-300/60" @click.self="isModalOpen = false">
            <!-- Slide the panel -->
            <Transition name="slide">
                <div v-show="isModalOpen" class="absolute right-4 bottom-4 z-50 card bg-base-100 w-96 h-80 shadow-lg">
                    <div class="relative p-4 flex flex-col gap-2 h-full">
                        <div class="flex items-center justify-between">
                            <h1>Tasks</h1>
                            <Close class="w-6 h-6 cursor-pointer" @click="toggleModal()" />
                        </div>
                        <ZenMode :zenMode="zenMode" @update:zenMode="zenMode = $event" />
                        <MultiTaskList :tasks="tasks" :zenMode="zenMode" />
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>

    <!-- FAB -->
    <button @click="handleModal" class="btn btn-primary rounded-full w-12 h-12 fixed bottom-4 right-4 z-50">
        Tasks
    </button>
</template>

<style scoped>
/* Fade backdrop */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s ease;
}

/* Slide the panel (up-and-in) */
.slide-enter-from {
    transform: translateY(16px);
    opacity: 0;
}

.slide-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-leave-to {
    transform: translateY(16px);
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all .22s ease;
}
</style>
