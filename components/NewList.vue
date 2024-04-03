<template>
    <div style="margin-top: 60px" class="content">
        <div v-for="l in list">
            <NewListElement v-model="listContent[l]" :id="l" @delete="(id) => removeElement(id)" @create="(id) => addElement(id)" :value="listContent[l]"/>
        </div>
        <div>
            <button @click="createList()" style="margin-left: 39px;">Create list</button>
        </div>
    </div>
</template>

<script setup>
const list = ref([0])
const listContent = ref([""])

const elementNumber = ref(0)

function addElement(number){
    //const elem = listContent.value[listContent.value.length-1]

    elementNumber.value++
    list.value.push(elementNumber.value)

    listContent.value.push("")

    for(let i = elementNumber.value; i > number+1; i--){
        listContent.value[i] = listContent.value[i-1] 
    }

    listContent.value[number+1] = ""
}

function removeElement(number){
    
    console.log("remove", number)

    if(listContent.value.length == 1){
        return
    }

    for(let i = number; i < listContent.value.length-1; i++){
        listContent.value[i] = listContent.value[i+1] 
    }
    
    listContent.value.pop()

    elementNumber.value--
    list.value.pop()
    //console.log(list.value)
}

async function createList(){
    //console.log(listContent.value)
    const data = await $fetch('/api/list', {
        method: 'POST',
        body: listContent.value
    })
    console.log(data)
}

</script>

<style scoped>
.create-button{
    border-color: #fe6c90;
    color: #fe6c90;
}
.create-button:hover {
  background-color: #452459;
}
</style>