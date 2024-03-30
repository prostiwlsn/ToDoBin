<template>
    <div class="list-item">
        <h3 style="margin: 0%; padding:0%; margin-right: 3px">1.</h3>
        <textarea placeholder="Your plans here" v-model="model" ref="textarea"></textarea>
    </div>
</template>

<script setup>
const props = defineProps(["id"])

//:style="{height: elementHeight + 'px'}"

const model = defineModel()
const textarea = ref(null)

const elementHeight = ref(18)

function resize(){
    textarea.value.style.height = '18px'
    textarea.value.style.height = textarea.value.scrollHeight - 4 + 'px'
    console.log(textarea.value.scrollHeight, textarea.value.style.height)
}

watch(model, (newElem, oldElem) => {
    resize()
})

onMounted(() => {
    //textarea.value.focus()
    resize()

    model.value = ""
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