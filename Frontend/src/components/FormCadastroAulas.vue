<template>
  <div>
    <div class="container cabecalho-cadastro">
      <b-row align-v="center">
        <b-col>
          <h1>Cadastre sua aula</h1>
          <p>Preencha os campos abaixo:</p>
        </b-col>
        <b-col cols="auto">
          <b-button @click="toPerfil">Acessar perfil</b-button>
        </b-col>
      </b-row>
    </div>

    <form action="submit">
      <fieldset class="container textoPreto">
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
                v-model="form.materia"
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
                v-model="form.custo_hora_aula"
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
            <div class="p-2 flex-shrink-0 bd-highlight moreSchedules">
              <p>+ novo horário</p>
            </div>
          </div>

          <!-- Data da aula -->
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-fill bd-highlight">
              <b-input-group-append>
                <b-form-datepicker
                  v-model="form.dia"
                  button-only
                  right
                  locale="en-US"
                  aria-controls="example-input"
                >
                </b-form-datepicker>
                <b-form-input
                  id="example-input"
                  v-model="form.dia"
                  type="text"
                  placeholder="Dia da aula"
                  autocomplete="off"
                >
                </b-form-input>
              </b-input-group-append>
            </div>

            <div class="p-2 flex-fill bd-highlight">
              <b-input
                id="inline-form-input-name"
                v-model="form.horario_inicio"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="17:10"
              ></b-input>
            </div>

            <p>até</p>

            <div class="p-2 flex-fill bd-highlight">
              <b-input
                id="inline-form-input-name"
                v-model="form.horario_fim"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="18:10"
              >
              </b-input>
            </div>
          </div>

          <!-- TESTE de adicao de componente - Lucas data_do_teste -->
          <b-button
            class="registerButton"
            type="submit"
            variant="primary"
            @click.prevent="cadastrar"
            >Cadastrar</b-button
          >
          <b-button @click.prevent="retornaIdUltimaAula">teste</b-button>
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
        materia: null,
        checked: [],
        custo_hora_aula: "",
        dia: "",
        horario_inicio: "",
        horario_fim: "",
      },
      disciplinas: [
        { text: "Selecione", value: null },
        "Português",
        "Matemática",
        "História",
        "Geografia",
        "Ciência",
      ],
      show: true,
      idUltimaAulaCadastrada: [],
      recebe: "",
    };
  },
  methods: {
    cadastrar() {
      // Cadastro da matéria
      this.$http
        // atentar a troca de id do professor
        .post(`/aulas/${localStorage.getItem("idUser")}`, this.form)
        .then((response) => {
          console.log("Aula cadastrada: " + response.data);
        })
        .catch((error) => {
          console.warn("Erro: " + error);
        });

      // Trocar estes TimeOut para Promises
      setTimeout(() => {
        this.$http.get("/aulas").then((response) => {
          this.idUltimaAulaCadastrada =
            response.data[
              Object.keys(response.data)[Object.keys(response.data).length - 1]
            ];
        });
      }, 1000);

      // Cadastro do horário
      setTimeout(() => {
        this.$http
          // atentar a troca de id da aula
          .post(`/horarios/${this.idUltimaAulaCadastrada.id}`, this.form)
          .then((response) => {
            console.log("Horário cadastrado: " + response.data);
          })
          .catch((error) => {
            console.warn("Erro: " + error);
          });
      }, 2000);
    },
    retornaIdUltimaAula() {},
    toPerfil() {
      this.$router.push("/perfil");
    },
  },
};
</script>

<style>
fieldset {
  padding: 15px 0 15px 0;
}

.cabecalho-cadastro {
  position: relative;
  left: -10px;
  color: rgb(0, 0, 0);
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

.textoPreto {
  color: black;
}
</style>
