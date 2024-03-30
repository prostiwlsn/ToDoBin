<template>
    <div class="top-line">
        <div class="navbar">
            <strong><h2 style="margin: 3px; color: #EEE4B1">ToDoBin</h2></strong>
            <button style="margin: 3px;">New list</button>
        </div>
    </div>
</template>

<script setup>
//background-image: linear-gradient(to right, #430A5D, #5F374B, #8C6A5D, #EEE4B1);
//text-shadow: 0px 2px #8C6A5D;

onMounted(() => {
  console.log(window.innerWidth)
  console.log(window.innerHeight)
})
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px;
  width: 60%;
  height:50px
}

.top-line{
  background-color: #5F374B;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1080px) {
  .navbar{
    width: 100%;
  }
}
</style>