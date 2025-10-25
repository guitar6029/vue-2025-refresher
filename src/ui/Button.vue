<script lang="ts" setup>

const emit = defineEmits<({
    onClick: []
})>();

const props = withDefaults(
    defineProps<{
        text?: string
    }>(),
    {
        text: "Click"
    }
)

</script>

<template>
    <button
        class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        {{ props.text }}
    </button>
</template>