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
    <button class="btn" @click="emit('onClick')">
        {{ props.text }}
    </button>
</template>