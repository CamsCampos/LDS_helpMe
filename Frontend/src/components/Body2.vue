<template>
<div id="backg">
  <div>
    <div class="container cabecalho-cadastro">
      <h1>Cadastre-se</h1>
      <p></p>
    </div>
    <fieldset class="container">
      <div class="form-intern-space">
        <h3></h3>
      
          <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Digite seu nome"></b-form-input>
          </b-form-group>

          

          <b-form-group id="input-group-1" label="Data de nascimento:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.data"
              type="email"
              required
              placeholder="--/--/----"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="E-mail:" label-for="input-5">
            <b-form-input id="input-5" v-model="form.email" required placeholder="Digite seu e-mail"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Usuário:" label-for="input-5">
            <b-form-input id="input-6" v-model="form.usuario" required placeholder="Digite seu usuário"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Senha:" label-for="input-7">
            <b-form-input id="input-7" v-model="form.senha" required placeholder="Senha"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label="Confirmar senha:" label-for="input-8">
            <b-form-input id="input-8" v-model="form.csenha" required placeholder="Confirmar senha"></b-form-input>
          </b-form-group>

         

        

        
         

        <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="professor">Professor</b-form-checkbox>
              <b-form-checkbox value="aluno">Aluno</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>

        <b-form-group id="input-group-3" label="    " label-for="input-3">
            <b-form-select id="input-3" v-model="form.formacao" :options="formacaos" required></b-form-select>
            </b-form-group>
            

        <b-button type="cadastrar" variant="primary">cadastrar</b-button>  

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>  

        

      </div>
    </fieldset>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        
        name: "",
        data: "",
        email:"",
        usuario:"",
        senha:"",
        csenha:"",
        formacao: null,
        checked: [],
      },
      formacaos: [
        { text: "Selecione a formação", value: null },
        "Superior Completo",
        "Superior Completo incompleto",
        "Ensino Médio completo",
        "Ensino Médio incompleto",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
  #backg{
    
      background: linear-gradient(to bottom, #031d44 0%, #025f53 100%);
    }
fieldset {
  background-color: #d8d8d8;
  border-radius: 8px;
  font-family: Poppins;
  font-weight: 500;
}

fieldset > .form-intern-space {
  padding: 1rem;
}

.cabecalho-cadastro {
  position: relative;
  left: -10px;
  color: white;
}
</style>