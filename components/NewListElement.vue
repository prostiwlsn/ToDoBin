<template>
    <div @mouseover="isAddShown=true" @mouseleave="isAddShown=false">
        <div class="list-item">
            <h3 style="margin: 0%; padding:0%; margin-right: 3px">{{ id+1 }}.</h3>
            <textarea placeholder="Your plans here" v-model="model" ref="textarea" @keydown.delete="deleteElement()"></textarea>
        </div>
        <div v-show="isAddShown" class="add-element" @click="createElement()">
            Add
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["id", "value"])
const emit = defineEmits(["create", "delete"])

//:style="{height: elementHeight + 'px'}"

//как вариант - сделать все это говно текстом, но оно будет textarea при клике (ИДЕЯ ХУЙНИ)

const model = defineModel()
const textarea = ref(null)
const isAddShown = ref(false)

const elementHeight = ref(18)

function resize(){
    textarea.value.style.height = '18px'
    textarea.value.style.height = textarea.value.scrollHeight - 4 + 'px'
    //console.log(textarea.value.scrollHeight, textarea.value.style.height)
}

function createElement(){
    //console.log('create', props.id)
    emit('create', props.id)
}

function deleteElement(){
    if(model.value.length == 0){
        //console.log('delete', props.id)
        textarea.value.blur()
        emit('delete', props.id)
    }
}

watch(model, (newElem, oldElem) => {
    resize()
})

onMounted(() => {
    model.value = props.value
    resize()
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

.add-element{
    color: #8C6A5D;
    cursor: pointer;
}
.add-element:hover{
    color: #430A5D;
}
</style>