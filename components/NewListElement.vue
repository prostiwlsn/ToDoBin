<template>
    <div class="list-item">
        <h3 style="margin: 0%; padding:0%; margin-right: 3px">1.</h3>
        <textarea placeholder="Your plans here" v-model="listElement" :style="{height: elementHeight + 'px'}" ref="textarea"></textarea>
    </div>
</template>

<script setup>
//const textarea = document.querySelector('textarea');

const listElement = ref("")
const textarea = ref(null)

const elementId = 1

const baseHeight = 18
const elementHeight = ref(18)

watch(listElement, (newElem, oldElem) => {
    //console.log(JSON.stringify(listElement.value))

    //let element = this.$refs["textarea"];
    //element.style.height = element.scrollHeight + "px";

    elementHeight.value = textarea.value.scrollHeight

    console.log(textarea.value.scrollHeight,textarea.value.style.height)
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