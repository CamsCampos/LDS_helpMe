<template>

  <div id="app" class="grad">
    <div class="container cabecalho-cadastro">
      <h1>Cadastre-se</h1>
    </div>
    <form action="submit">
      <fieldset class="container">
        <!-- Nome e data de nascimento -->
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Nome completo:"></b-input>
          </div>

          <div class="p-2 flex-fill bd-highlight">
            <b-form-datepicker id="example-datepicker" v-model="dateValue" class="mb-2" placeholder="Data de nascimento:"></b-form-datepicker>
            <!-- <p>Value: '{{ dateValue }}'</p> -->
          </div>
        </div>

        <!-- Usuario e senha -->
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <label class="sr-only" for="inline-form-input-user">Name</label>
            <b-input id="inline-form-input-user" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Usuário"></b-input>
          </div>

          <div class="p-2 flex-fill bd-highlight">
            <b-container fluid>
              <b-row class="my-1" v-for="type in types" :key="type">
                <b-form-input placeholder="Senha" :id="`type-${type}`" :type="type"></b-form-input>
              </b-row>
            </b-container>
          </div>
        </div>

        <!-- Confirmar senha e e-mail -->
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <div class="my-1" v-for="type in types" :key="type">
              <b-form-input placeholder="Confirmar senha" :id="`type-${type}`" :type="type"></b-form-input>
            </div>
          </div>

          <div class="p-2 flex-fill bd-highlight">
            <label class="sr-only" for="inline-form-input-email">E-mail</label>
            <b-input id="inline-form-input-email" class="mb-2 mr-sm-2 mb-sm-0" placeholder="E-mail:"></b-input>
          </div>
        </div>

        <!-- Dropdown de escolaridade -->
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <b-form-select v-model="dropDownScholarity" :options="dropDownScholariryOprions" size="sm" class="mt-3"></b-form-select>

          </div>
        </div>

        <!-- Radio de tipo de cadastro -->
        <div class="center">
          <b-form-group label="Realizar seu cadastro como:">
            <b-form-radio-group v-model="radioRegisterType" :options="radioRegisterOptions" class="mb-3" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-radio-group>
          </b-form-group>
          <!--
          <div class="mt-3">
           Selected radio:
           <strong>{{ radioRegisterType }}</strong>
          </div>
-->
        </div>
      </fieldset>

      <!-- Botões -->
      <div class="container-fluid">
        <b-row align-h="end espaco">
          <b-col cols="4">
            <b-button type="submit" variant="primary center">Cadastrar</b-button>
          </b-col>

          <b-col cols="4">
            <a class="returnIndex" @click="goIndex">
              <b-icon-arrow-left></b-icon-arrow-left>
              Voltar à página de login
            </a>
          </b-col>
        </b-row>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        dropDownScholarity: null,
        dropDownScholariryOprions: [
          { value: null, text: "Formação" },
          { value: "EMI", text: "Ensino médio incompleto" },
          { value: "EMC", text: "Ensino médio completo" },
          { value: "ESI", text: "Ensino superior incompleto" },
          { value: "ESC", text: "Ensino superior completo" },
        ],
        radioRegisterType: "A",
        radioRegisterOptions: [
          { item: "A", name: "Aluno" },
          { item: "P", name: "Professor" },
        ],
        dateValue: "",
        types: ["password"],
      };
    },
    methods: {
      goIndex() {
        this.$router.push("/");
      },
    },
  };
</script>

<style scoped>
  .cabecalho-cadastro {
    position: relative;
    left: -10px;
    color: rgb(0, 0, 0);
    text-align: center;
  }

  .center {
    text-align: center;
  }

  .returnIndex {
    /* color: black; */
  }

  .espaco {
    margin-top: 40px;
  }

  .grad {
    background: linear-gradient(to bottom, #031d44 0%, #025f53 100%);
  }

  h1 {
    color: white;
  }
</style>
