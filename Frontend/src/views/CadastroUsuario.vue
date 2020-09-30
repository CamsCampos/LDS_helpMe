<template>
  <div>
    <form-cadastro-usuarios />
  </div>
</template>

<script>
import FormCadastroUsuarios from "@/components/FormCadastroUsuarios.vue";

export default {
  components: {
    FormCadastroUsuarios,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

.cabecalho {
  /* position: relative;
  left: 100px;
  top: -10rem; */
}
</style>
