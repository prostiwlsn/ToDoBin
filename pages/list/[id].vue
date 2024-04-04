<script setup>
import { onMounted } from 'vue';

const route = useRoute()
const content = await $fetch('/api/list/' + route.params.id, {
    method: 'get',
})

const done = ref([])

onMounted(async () => {
    console.log(route.params.id)
    console.log(content)

    const doneParams = '?' + 'listId=' + route.params.id + '&' + 'userId=' + localStorage.getItem('todoUserId')
    done.value = await $fetch('/api/done/' + doneParams, {
        method: 'get'
    })

    console.log(done.value)
})
</script>

<template>
    <div style="margin-top: 60px" class="content">
        <div v-for="(line, index) in content.content">
            <ToDoListElement :line="line" :lineId="index" :listId="route.params.id" :done="done" :key="done"/>
        </div>
    </div>
</template>