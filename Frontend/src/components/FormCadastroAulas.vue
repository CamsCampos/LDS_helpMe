<template>
  <div>
    <div class="container cabecalho-cadastro">
      <h1>Cadastre sua aula</h1>
      <p>Preencha os campos abaixo:</p>
    </div>

    <form action="submit">
      <fieldset class="container">
        <h3>Sobre a aula</h3>
        <!-- Disciplina -->
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <b-form-group
              id="input-group-3"
              label="Matéria:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="disciplinas"
                required
              ></b-form-select>
            </b-form-group>
          </div>

          <!-- Hora/aula -->
          <div class="p-2 flex-fill bd-highlight">
            <b-form-group
              id="input-group-1"
              label="Custo da sua hora/aula (R$):"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.number"
                type="number"
                required
                placeholder="R$10,00"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <!-- CONTEUDO ANTIGO -->

        <div class="form-intern-space">
          <div class="d-flex bd-highlight">
            <div class="p-2 w-50 bd-highlight">
              <h3>Horários disponíveis</h3>
            </div>
            <div
              @click="addMoreSchedules"
              class="p-2 flex-shrink-0 bd-highlight moreSchedules"
            >
              + novo horário
            </div>
          </div>

          <!-- Data da aula -->
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-fill bd-highlight">
              <b-form-datepicker
                id="example-datepicker"
                v-model="dateValue"
                class="mb-2"
                placeholder="Data de nascimento:"
              ></b-form-datepicker>
            </div>

            <div class="p-2 flex-fill bd-highlight">
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="17:10"
              ></b-input>
            </div>

            <p>até</p>

            <div class="p-2 flex-fill bd-highlight">
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="18:10"
              ></b-input>
            </div>
          </div>

          <!-- teste de adicao de componente -->
          <component
            v-for="(component, index) in components"
            :key="index"
            :is="component"
          />

          <b-button class="registerButton" type="submit" variant="primary"
            >Submit</b-button
          >
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
const Comp = {
  //   template: `
  //         <div class="d-flex bd-highlight">
  //             <div class="p-2 flex-fill bd-highlight">
  //               <b-form-datepicker
  //                 id="example-datepicker"
  //                 v-model="dateValue"
  //                 class="mb-2"
  //                 placeholder="Data de nascimento:"
  //               ></b-form-datepicker>
  //             </div>

  //             <div class="p-2 flex-fill bd-highlight">
  //               <b-input
  //                 id="inline-form-input-name"
  //                 class="mb-2 mr-sm-2 mb-sm-0"
  //                 placeholder="17:10"
  //               ></b-input>
  //             </div>

  //             <p>até</p>

  //             <div class="p-2 flex-fill bd-highlight">
  //               <b-input
  //                 id="inline-form-input-name"
  //                 class="mb-2 mr-sm-2 mb-sm-0"
  //                 placeholder="18:10"
  //               ></b-input>
  //             </div>
  //         </div>
  //     `,

  template: "<div>Hello world</div>",
};

export default {
  template: `
    <div>
        <h1>Teste</h1>
    </div>
  `,
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      disciplinas: [
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
      components: [Comp],
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
    addMoreSchedules() {
      this.components.push(Comp);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

fieldset {
  padding: 15px 0 15px 0;
}

.cabecalho-cadastro {
  position: relative;
  left: -10px;
  color: rgb(0, 0, 0);
}

.moreSchedules {
}
.moreSchedules:hover {
  cursor: pointer;
}

.registerButton {
  color: white;
  background-color: #025f53;
  border: none;
  float: right;
}
</style>