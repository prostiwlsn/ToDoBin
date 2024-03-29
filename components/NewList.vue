<template>
    <div class="list-item">
        <div>page content</div>
        <div>page content</div>
    </div>
</template>

<script setup>
const list = ref([])

onMounted(() => {
    //console.log($refs.navbar.clientHeight)
})
</script>

<style scoped>
.list-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>