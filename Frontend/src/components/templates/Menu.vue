<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Início</a>
      </router-link>
      <router-link to="/cadastro" tag="li" active-class="active">
        <a>Cadastro de disciplinas</a>
      </router-link>
      <router-link to="/cadastro-usuario" tag="li" active-class="active">
        <a>Cadastro de usuarios</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>