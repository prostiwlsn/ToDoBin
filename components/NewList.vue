<template>
    <div class="list-item">
        <h3 style="margin: 0%; padding:0%; margin-right: 3px">1.</h3>
        <textarea placeholder="Your plans here"></textarea>
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
    justify-content: start;
}

input{
    background: none;
    border: none;
    width: 100%;
}

textarea{
    background: none;
    border: none;
    width: 100%;
    height: 18px;
    resize: none;
    font-size: 18px;
}

textarea:focus{
    border: none;
    outline: none;
}
</style>