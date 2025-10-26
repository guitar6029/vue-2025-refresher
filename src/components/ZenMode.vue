<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'update:zenMode', value: boolean): void
}>();

const props = defineProps<{
    zenMode: boolean
}>();

</script>

<template>
    <div class="flex w-fit">
        <div @click="emits('update:zenMode', !props.zenMode)" class="tooltip cursor-pointer"
            data-tip="Zen Mode, forget the time">
            <button class="btn">Zen Mode</button>
        </div>
    </div>
</template>