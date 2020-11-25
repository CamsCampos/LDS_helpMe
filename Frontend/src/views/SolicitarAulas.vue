<template>
  <div class="fundoBranco">
    <div id="cabecalho-degrade">
      <div class="container">
        <p class="testeFonte">Encontre uma aula</p>
        <p>Escolha sua matéria e professor:</p>
      </div>
    </div>
    <div class="container">
      <section class="quadrado">
        <div class="conteudo">
          <b-row>
            <b-col sm="5">
              <label for="example-datepicker">Matéria:</label>
              <b-form-select
                v-model="selected"
                :options="options"
                class="mb-2"
              ></b-form-select>
              <p>
                Matéria selecionada: <strong>{{ selected }}</strong>
              </p>
            </b-col>
            <b-col sm="5">
              <label for="example-datepicker">Data:</label>
              <b-form-datepicker
                id="example-datepicker"
                v-model="dataExtenso"
                class="mb-2"
                placeholder="Selecione a data"
              ></b-form-datepicker>
              <p>Data selecionada: {{ dataExtenso }}</p>
            </b-col>
          </b-row>
          <b-form-group label="Filtrar por:">
            <b-row>
              <b-col sm="3">
                <b-form-radio
                  v-model="filtroRadial"
                  name="some-radios"
                  value="Menor"
                  >Menor valor</b-form-radio
                >
              </b-col>

              <b-col sm="3">
                <b-form-radio
                  v-model="filtroRadial"
                  name="some-radios"
                  value="Maior"
                  >Maior valor</b-form-radio
                >
              </b-col>
            </b-row>
            <p>Filtragem: {{ filtroRadial }}</p>
          </b-form-group>

          <!-- Início da div separada para os cards -->
          <div class="text-center">
            <br />
            <h2>Professores disponíveis</h2>
            <hr />
            <br />
            <!-- Cards -->
            <b-row>
              <b-col>
                <b-card-group deck>
                  <b-card
                    img-top
                    class="cardRedondo"
                    v-for="(item, id) in aulaHorarios"
                    :key="id"
                    v-show="item.aula.materia == selected"
                  >
                    <div class="testeCardPadding">
                      <img
                        class="teste"
                        src="../../public/img/elipseFaceBackground.svg"
                        alt=""
                      />
                      <b-img
                        rounded="circle"
                        src="https://placekitten.com/96/139"
                        img-alt="Card image"
                        class="imagemCard"
                      ></b-img>

                      <h4>{{ item.aula.professor.pessoa.nome }}</h4>
                      <b-card-text>
                        <b-row class="text-left mt-3 mb-4 text-center">
                          <b-col>
                            <strong>Matéria: </strong>
                            {{ item.aula.materia }}
                          </b-col>
                          <b-col>
                            <strong>Valor: </strong>
                            R${{ item.aula.custo_hora_aula }}
                          </b-col>
                        </b-row>
                        <p class="lead espessuraFonte">
                          <strong> Horários disponíveis</strong>
                        </p>

                        <table
                          class="corTabelaCard tableCardResultRadius"
                          style="width: 100%"
                        >
                          <tr class="th">
                            <th class="strong">Data</th>
                            <th class="strong">Horário início</th>
                            <th class="strong">Horário fim</th>
                          </tr>
                          <tr>
                            <td>{{ item.horario.dia }}</td>
                            <td>{{ item.horario.horario_inicio }}</td>
                            <td>{{ item.horario.horario_fim }}</td>
                          </tr>
                        </table>
                      </b-card-text>
                      <b-button href="#" class="btnCard" @click="agendarAula"
                        >Agendar</b-button
                      >
                    </div>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>
          </div>
          <!-- Fim da div dos cards -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Selecione uma opção" },
        { value: "Português", text: "Português" },
        { value: "Matemática", text: "Matemática" },
        { value: "História", text: "História" },
        { value: "Geografia", text: "Geografia" },
        { value: "Ciência", text: "Ciência" },
      ],
      dataExtenso: "",
      filtroRadial: "",
      aulaHorarios: [],
    };
  },
  methods: {
    getAulas() {},
    agendarAula() {
      this.$http
        // *** Ficar atendo para mudar o id do aluno e o índice de aulaHorarios ***
        .post(`/agendamentos/alunos/${3}`, {
          id_aula_horarios: this.aulaHorarios[0].id,
        })
        .then((response) => {
          console.log("Sucesso: " + response.data);
        })
        .catch((error) => {
          console.warn("Erro: " + error);
        });
    },
  },
  computed: {
    ordenarPorValor() {
      return this.aulaHorarios.filter((a) => {
        a.aula.custo_hora_aula % 2 === 0;
      });
    },
  },
  mounted() {
    this.$http.get("/aulaHorarios").then((response) => {
      this.aulaHorarios = response.data;
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

.btnCard {
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

.testeFonte {
  font-size: 50px;
  font-weight: 400;
  /* margin-bottom: 0; */
}

.testeCardPadding {
  padding: 0;
}

.th {
  border-bottom: 1px solid #d4d4d4;
}

.tableCardResultRadius {
  border-radius: 4px;
}
</style>
