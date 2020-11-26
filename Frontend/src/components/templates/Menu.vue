<template>
  <div>
    <nav class="menu">
      <ul>
        <router-link to="/login" tag="li" active-class="active">
          <a>Login</a>
        </router-link>
        <router-link to="/cadastro-usuario" tag="li" active-class="active">
          <a>Cadastro de usuarios</a>
        </router-link>
        <router-link to="/perfil" tag="li" active-class="active">
          <a>Perfil</a>
        </router-link>
        <router-link to="/agenda" tag="li" active-class="active">
          <a>Agenda</a>
        </router-link>
        <router-link to="/cadastro-aula" tag="li" active-class="active">
          <a>Cadastro de disciplinas</a>
        </router-link>
        <router-link to="/forum" tag="li" active-class="active">
          <a>Forum</a>
        </router-link>
        <router-link to="/solicita-aula" tag="li" active-class="active">
          <a>Solicitar aulas</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
