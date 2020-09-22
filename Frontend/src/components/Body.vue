<template>
  <div>
    <div class="container cabecalho-cadastro">
      <h1>Cadastre sua aula</h1>
      <p>Preencha os campos abaixo:</p>
    </div>
    <fieldset class="container">
      <div class="form-intern-space">
        <h3>Sobre a aula</h3>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-3" label="Matéria:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-1" label="Custo da sua hora/aula (R$):" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="R$10,00"
            ></b-form-input>
          </b-form-group>

          <h3>Horários disponíveis</h3>
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Selecione", value: null },
        "Português",
        "Matemática",
        "História",
        "Geografia",
        "Química",
        "Física",
        "Biologia",
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