<template>
  <div id="app">
    <Header />
    <Body class="teste" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
  name: "App",
  components: {
    Header,
    Body,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.teste {
  position: relative;
  /* left: 100px; */
  top: -10rem;
}
</style>
