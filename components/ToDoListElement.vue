<script setup>
const props = defineProps(['listId', 'lineId', 'line', 'done'])
const emit = defineEmits(['check', 'uncheck'])

const isDisabled = ref(false)
const isChecked = ref(false)

watch(isChecked, async (newValue, oldValue) => {
    isDisabled.value = true

    console.log(newValue)

    const data = await $fetch('/api/done/' + newValue, {
        method: 'POST',
        body: {
            listId: props.listId,
            lineId: props.lineId,
            userId: localStorage.getItem('todoUserId')
        }
    })

    isDisabled.value = false
})

onMounted(async () => {
    if(props.done.filter(d => d.lineId == props.lineId).length > 0){
        isChecked.value = true
    }
})
</script>

<template>
    <div class="list-line">
        <div class="list-line-1st">
            <h3 style="margin: 0%; padding-right: 5px">{{ lineId }}.</h3>
            <div style="font-size: 18px;">{{ line }}</div>
        </div>
        <input type="checkbox" class="cb-wrapper" :disabled="isDisabled" v-model="isChecked">
    </div>
</template>

<style scoped>
.list-line{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.input[type="checkbox"]{
    content: "";
    width: 18px;
    height: 18px;
    fill: none;  
}

input:checked{
    background-color: pink;
    fill: none;  
}

.cb-wrapper{
    width: 18px;
    height: 18px;
}

.list-line-1st{
    display: flex;
    flex-direction: row;
    justify-content: start;
}

</style>