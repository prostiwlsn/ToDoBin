<script setup>
import { onMounted } from 'vue';

const route = useRoute()
const content = await $fetch('/api/list/' + route.params.id, {
        method: 'get',
    })

onMounted(() => {
    console.log(route.params.id)
    console.log(content)
})
</script>

<template>
    <div style="margin-top: 60px" class="content">{{route.params.id}}</div>
</template>