<template>
    <div class="top-line">
        <div class="navbar">
            <strong><h3 style="margin: 0%; color: #EEE4B1">ToDoList</h3></strong>
            <button style="margin: 3px;">New list</button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 5px;
    width: 60%;
}

.top-line{
    background-image: linear-gradient(to right, #430A5D, #5F374B, #8C6A5D, #EEE4B1);
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #430A5D;
  color: #EEE4B1;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #353541;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>