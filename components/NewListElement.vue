<template>
    <div class="list-item">
        <h3 style="margin: 0%; padding:0%; margin-right: 3px">1.</h3>
        <textarea placeholder="Your plans here" v-model="listElement" :style="{height: elementHeight + 'px'}" ref="textarea"></textarea>
    </div>
</template>

<script setup>
const listElement = ref("")
const textarea = ref(null)

const elementHeight = ref(18)

watch(listElement, (newElem, oldElem) => {
    textarea.value.style.height = '18px'
    elementHeight.value = textarea.value.scrollHeight - 4

    console.log(textarea.value.scrollHeight,textarea.value.style.height, elementHeight.value)
})

onMounted(() => {
    //textarea.value.focus()
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
    resize: none;
    font-size: 18px;
}

textarea:focus{
    border: none;
    outline: none;
}
</style>