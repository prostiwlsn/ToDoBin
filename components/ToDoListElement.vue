<script setup>
const props = defineProps(['listId', 'lineId', 'line'])
const emit = defineEmits(['check', 'uncheck'])
</script>

<template>
    <div>
        {{ line }}
    </div>
</template>