<template>
  <Navbar/>
  <div style="display: flex;" class="content-center"><NuxtPage style="margin-top: 60px" class="content"/></div>
</template>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content{
  width: 60%;
}

@media only screen and (max-width: 1080px) {
  .content{
    width: 100%;
  }
}

.content-center{
  display: flex;
  justify-content: center;
}
</style>