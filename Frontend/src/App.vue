<template>
  <div id="app">
    <router-view />
    <nav class="nav">
      <!-- <h1>Rotas com VueRouter</h1> -->
      <Menu />
    </nav>
  </div>
</template>

<script>
import Menu from "./components/templates/Menu";
export default {
  components: { Menu },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
@import "./style/general.css";
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
