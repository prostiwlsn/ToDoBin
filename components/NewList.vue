<template>
    <div style="margin-top: 60px" class="content">
        <div v-for="l in list">
            <NewListElement v-model="listContent[l]"/>
        </div>
        <div>
            <button class="create-button" @click="listContent[0]='example'">Create list</button>
        </div>
    </div>
</template>

<script setup>
const list = ref([0])
const listContent = ref([""])

const elementNumber = ref(0)

function addElement(l){
    elementNumber.value++
    list.value.push(elementNumber.value)
}

</script>

<style scoped>
.create-button{
    border-color: #8C6A5D;
    color: #8C6A5D;
}
.create-button:hover {
  background-color: #8C6A5D;
  color: #EEE4B1;
}
</style>