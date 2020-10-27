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
      <router-link to="/solicita-aula" tag="li" active-class="active">
        <a>Solicitar aulas</a>
      </router-link>
      <router-link to="/agenda" tag="li" active-class="active">
        <a>Agenda</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
