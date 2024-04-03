<script setup>
const props = defineProps(['listId', 'lineId', 'line'])
const emit = defineEmits(['check', 'uncheck'])
</script>

<template>
    <div class="list-line">
        <div class="list-line-1st">
            <h3 style="margin: 0%; padding-right: 5px">{{ lineId }}.</h3>
            <div style="font-size: 18px;">{{ line }}</div>
        </div>
        <input type="checkbox" class="cb-wrapper">
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