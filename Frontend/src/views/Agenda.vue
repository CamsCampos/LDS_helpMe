<template>
  <div class="fundoBranco">
    <div id="cabecalho-degrade">
      <div class="container">
        <p class="fonteTitulo">Agenda</p>
        <b-row>
          <b-col>
            <p>Aqui está sua agenda:</p>
          </b-col>
          <b-col cols="auto">
            <p>
              <b-button @click="toPerfil" class="mr-1">
                Acessar perfil
              </b-button>
              <b-button @click="toCadastroAula"> Cadastrar aula </b-button>
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-container>
      <section class="quadrado">
        <div class="conteudo">
          <b-row v-show="permissao == 2 ? true : false">
            <b-col>
              <label for="example-datepicker">Matéria:</label>
              <b-form-select
                v-model="selected"
                :options="opcoes"
                class="mb-2"
              ></b-form-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h2 class="mt-2">Aulas agendadas</h2>
              <hr />
              <div v-if="permissao == 1">
                <div v-for="(item, id) in agendamentos" :key="id">
                  <!-- v-show="item.aula_horario.aula.materia == selected" -->
                  <h4>{{ item.aula_horario.aula.materia }}</h4>
                  <b-row class="ml-3">
                    <b-col class="espessuraFonte">
                      <p>
                        <strong>Professor: </strong>
                        {{ item.professor.pessoa.nome }}
                      </p>
                      <p>
                        <strong>Valor: </strong> R${{
                          item.aula_horario.aula.custo_hora_aula
                        }}
                      </p>
                      <p><strong>Horários marcados:</strong></p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <div>
                        <table class="ml-5" style="width: 90%">
                          <tr style="background: #fff">
                            <th>Data</th>
                            <th>Horário início</th>
                            <th>Horário fim</th>
                            <th>Modificar</th>
                          </tr>
                          <tr>
                            <td>{{ item.aula_horario.horario.dia }}</td>
                            <td>
                              {{ item.aula_horario.horario.horario_inicio }}
                            </td>
                            <td>{{ item.aula_horario.horario.horario_fim }}</td>
                            <td>
                              <b-button @click="confirmacaoCancelar">
                                Cancelar
                              </b-button>
                              <b-button
                                class="ml-1"
                                variant="success"
                                @click="toForum"
                              >
                                Abrir fórum
                              </b-button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </b-col>
                  </b-row>
                  <hr />
                </div>
              </div>
              <div v-else>
                <div
                  v-for="(item, id) in agendamentos"
                  :key="id"
                  v-show="item.aula_horario.aula.materia == selected"
                >
                  <h4>{{ item.aula_horario.aula.materia }}</h4>
                  <b-row class="ml-3">
                    <b-col class="espessuraFonte">
                      <p>
                        <strong>Professor: </strong>
                        {{ item.professor.pessoa.nome }}
                      </p>
                      <p>
                        <strong>Valor: </strong> R${{
                          item.aula_horario.aula.custo_hora_aula
                        }}
                      </p>
                      <p><strong>Horários marcados:</strong></p>
                    </b-col>
                    <!-- <b-col class="sublinhado">
                    <a @click="toPerfilProf"> Ver perfil </a>
                  </b-col> -->
                  </b-row>
                  <b-row>
                    <b-col>
                      <div>
                        <table class="ml-5" style="width: 90%">
                          <tr style="background: #fff">
                            <th>Data</th>
                            <th>Horário início</th>
                            <th>Horário fim</th>
                            <th>Modificar</th>
                          </tr>
                          <tr>
                            <td>{{ item.aula_horario.horario.dia }}</td>
                            <td>
                              {{ item.aula_horario.horario.horario_inicio }}
                            </td>
                            <td>{{ item.aula_horario.horario.horario_fim }}</td>
                            <td>
                              <b-button @click="confirmacaoCancelar">
                                Cancelar
                              </b-button>
                              <b-button
                                class="ml-1"
                                variant="success"
                                @click="toForum"
                              >
                                Abrir fórum
                              </b-button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </b-col>
                  </b-row>
                  <hr />
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      opcoes: [
        { value: null, text: "Selecione uma opção" },
        { value: "Português", text: "Português" },
        { value: "Matemática", text: "Matemática" },
        { value: "História", text: "História" },
        { value: "Geografia", text: "Geografia" },
        { value: "Ciência", text: "Ciência" },
      ],
      dataExtenso: "",
      valor: "40,00",
      aulaHorarios: [],
      agendamentos: [],
      permissao: localStorage.getItem("permissao"),
    };
  },
  methods: {
    confirmacaoCancelar() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Deseja confirmar o cancelamento?")
        .then((value) => {
          this.boxOne = value;
          this.cancelar();
        })
        .catch((err) => {
          console.warn("Erro: " + err);
        });
    },
    cancelar() {
      this.$http
        .delete(`agendamentos/alunos/${1}/${1}`)
        .then((response) => {
          console.log("Deletado: " + response.data);
        })
        .catch((error) => {
          console.warn("Erro: " + error);
        });
    },
    toPerfil() {
      this.$router.push("/perfil");
    },
    toCadastroAula() {
      this.$router.push("/cadastro-aula");
    },
    toForum() {
      this.$router.push(`/forum/${1}`);
    },
  },
  mounted() {
    this.$http.get("/aulaHorarios").then((response) => {
      this.aulaHorarios = response.data;
    });
    // *** Ficar atendo para mudar o id do aluno ***
    this.$http.get(`/agendamentos/alunos/1`).then((response) => {
      this.agendamentos = response.data;
    });
  },
};
</script>

<style scoped>
#cabecalho-degrade {
  background: linear-gradient(180deg, #031d44 25.52%, #025f53 100%);
  opacity: 0.9;
  color: white;
  box-shadow: 0px 1px 2px black;
}

#cabecalho-degrade h2 {
  padding: 30px 0 0 90px;
}

#cabecalho-degrade p {
  padding: 30px 0 50px 90px;
}

.quadrado {
  display: flex;
  position: relative;
  top: -40px;
}

.quadrado .conteudo {
  padding: 40px 20px 20px 20px;
  background: #fff;
  border-radius: 10px 10px 0px 0px;
  width: 100vw;
}

.fundoBranco {
  background: #fafafa;
}

.corTabelaCard {
  background: #efefef;
}

.espessuraFonte {
  font-weight: 500;
}

.btnCor {
  background: #025f53;
  width: 100%;
}

.cardRedondo {
  border-radius: 10px;
  padding: 0;
}

.imagemCard {
  position: relative;
  width: 98px;
  height: 102px;
  top: -10px;
}

.elipse {
  position: absolute;
  width: 388px;
  height: 200px;
  left: -50px;
  top: -120px;
  border-radius: 50%;
  background: linear-gradient(180deg, #031d44 0%, #025f53 100%);
}

.teste {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 90px;
}

.fonteTitulo {
  font-size: 50px;
  font-weight: 400;
}

.testeCardPadding {
  padding: 0;
}

.sublinhado {
  text-decoration: underline;
}

.tableFullWidth {
  widows: 100%;
}

/* estilo da tabela */
table,
td,
th,
tfoot {
  border: solid 1px #000;
  padding: 5px;
}

th {
  background-color: #999;
}
</style>
