<script setup>
import { onMounted } from 'vue';

const route = useRoute()
const content = await $fetch('/api/list/' + route.params.id, {
    method: 'get',
})
//v-for="line in content"
onMounted(() => {
    console.log(route.params.id)
    console.log(content)
})
</script>

<template>
    <div style="margin-top: 60px" class="content">
        <div v-for="(line, index) in content.content">
            <ToDoListElement :line="line" :lineId="index" :listId="route.params.id"/>
        </div>
    </div>
</template>