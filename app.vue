<template>
  <Navbar/>
  <div style="display: flex;" class="content-center"><NuxtPage/></div>
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

body{
  background-color: #51496b;
  color: #ef87c3;
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

button {
  border-radius: 8px;
  border: 2px solid;
  border-color: #ef87c3;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: hsl(281, 81%, 20%, 0);
  color: #ef87c3;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  background-color: #70567b;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>