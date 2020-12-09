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
</style>
