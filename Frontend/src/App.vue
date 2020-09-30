<template>
  <div id="app">
    <nav class="nav">
      <h1>Rotas com VueRouter</h1>
      <Menu />
    </nav>
    <router-view />
  </div>
</template>

<script>
  import Menu from "./components/templates/Menu";
  export default {
    components: { Menu },
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

  #app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
