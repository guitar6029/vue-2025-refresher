<script lang="ts" setup>
import type { MiniTaskWithTimeStamp } from '../../types/MiniTask';
import { Sprout as Zen } from 'lucide-vue-next';
import { computed, } from 'vue';
import { TimeAgo, getTimeProgress } from '../../utils/TimeUtils';
import { useNow } from '@vueuse/core'
import RadialProgress from '../../ui/RadialProgress.vue';


const props = defineProps<{
    task: MiniTaskWithTimeStamp
    zenMode: boolean
}>();


const now = useNow({ interval: 1000 });

const progress = computed(() => {
    now.value // make it tick
    return getTimeProgress(props.task.createdAt, props.task.dueAt)
})

const timeAgo = computed(() => {
    now.value // tick this too
    return TimeAgo(props.task.createdAt)
})


</script>

<template>
    <div class="flex items-center gap-2">
        <span class="capitalize">{{ props.task.taskName }}</span>
        <div class="badge badge-sm badge-primary">
            <span>{{ timeAgo }}</span>
        </div>
    </div>
    <Zen v-if="props.zenMode" class="w-6 h-6" />
    <RadialProgress v-else :value="progress" />
</template>