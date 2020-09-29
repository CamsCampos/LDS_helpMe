<template>
  <div>
    <Header />
    <form-cadastro-aulas class="cabecalho" />
  </div>
</template>

<script>
import Header from "@/components/templates/Header.vue";
import FormCadastroAulas from "@/components/FormCadastroAulas.vue";

export default {
  components: {
    Header,
    FormCadastroAulas,
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