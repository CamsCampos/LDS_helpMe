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
            <b-form-group id="input-group-3"
                          label="Matéria:"
                          label-for="input-3">
              <b-form-select id="input-3"
                             v-model="form.materia"
                             :options="disciplinas"
                             required></b-form-select>
            </b-form-group>
          </div>

          <!-- Hora/aula -->
          <div class="p-2 flex-fill bd-highlight">
            <b-form-group id="input-group-1"
                          label="Custo da sua hora/aula (R$):"
                          label-for="input-1">
              <b-form-input id="input-1"
                            v-model="form.custo_hora_aula"
                            type="number"
                            required
                            placeholder="R$10,00"></b-form-input>
            </b-form-group>
          </div>
        </div>

        <!-- CONTEUDO ANTIGO -->

        <div class="form-intern-space">
          <div class="d-flex bd-highlight">
            <div class="p-2 w-50 bd-highlight">
              <h3>Horários disponíveis</h3>
            </div>
            <div @click="addMoreSchedules"
                 class="p-2 flex-shrink-0 bd-highlight moreSchedules">
              + novo horário
            </div>
          </div>

          <!-- Data da aula -->
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-fill bd-highlight">
              <b-input-group-append>
                <b-form-datepicker v-model="form.dia"
                                   button-only
                                   right
                                   locale="en-US"
                                   aria-controls="example-input">
                </b-form-datepicker>
                <b-form-input id="example-input"
                              v-model="form.dia"
                              type="text"
                              placeholder="Dia da aula"
                              autocomplete="off">
                </b-form-input>
              </b-input-group-append>
            </div>

            <div class="p-2 flex-fill bd-highlight">
              <b-input id="inline-form-input-name"
                       v-model="form.horario_inicio"
                       class="mb-2 mr-sm-2 mb-sm-0"
                       placeholder="17:10"></b-input>
            </div>

            <p>até</p>

            <div class="p-2 flex-fill bd-highlight">
              <b-input id="inline-form-input-name"
                       v-model="form.horario_fim"
                       class="mb-2 mr-sm-2 mb-sm-0"
                       placeholder="18:10">
              </b-input>
            </div>
          </div>

          <!-- TESTE de adicao de componente - Lucas data_do_teste -->
          <component v-for="(component, index) in components"
                     :key="index"
                     :is="component" />

          <b-button class="registerButton"
                    type="submit"
                    variant="primary"
                    @click.prevent="cadastrar">Cadastrar</b-button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          materia: "Geografia",
          checked: [],
          custo_hora_aula: 25,
          dia: "2020-10-01",
          horario_inicio: "18:00",
          horario_fim: "19:00",
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
      };
    },
    methods: {
      cadastrar() {
        // Cadastro da matéria
        console.log("aula: ", this.form);
        this.$http
          .post("/aulas/1", this.form)
          .then((res) => {
            console.log("Sucesso: " + res.data);
          })
          .catch((err) => {
            console.warn("Erro: " + err);
          });

        // Cadastro do horário
        console.log("aula: ", this.form);
        this.$http
          .post("/horarios/1", this.form)
          .then((res) => {
            console.log("Sucesso: " + res.data);
          })
          .catch((err) => {
            console.warn("Erro: " + err);
          });
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

  /* .moreSchedules {} */

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