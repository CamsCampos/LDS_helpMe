<template>
  <div>
    <b-card
      img-alt="Image"
      img-top
      class="cardRedondo"
      v-for="(item, id) in aulaHorarios"
      :key="id"
      v-show="item.aula.materia == materiaSelecionada"
    >
      <div class="text-center">
        <img
          class="posicaoElipse"
          src="../../../public/img/elipseFaceBackground.svg"
          alt="elipse"
        />
        <b-img
          rounded="circle"
          src="https://placekitten.com/96/139"
          img-alt="Card image"
          class="imagemCard"
        ></b-img>
        <h4 class="mb-5" variant="secondary">
          {{ item.aula.professor.pessoa.nome }}
        </h4>
      </div>
      <b-card-text>
        <b-row class="text-left mt-3 mb-4 text-center">
          <b-col>
            <b-icon icon="book" scale="1.8" variant="primary"></b-icon>
            <p class="mt-0 espessuraFonte">
              {{ item.aula.materia }}
            </p>
          </b-col>
          <b-col>
            <b-icon icon="cash" scale="1.8" variant="success"></b-icon>
            <p class="mt-0 espessuraFonte">R${{ item.aula.custo_hora_aula }}</p>
          </b-col>
        </b-row>

        <p class="lead">
          <strong> Horários disponíveis</strong>
        </p>

        <table class="corTabelaCard tableCardResultRadius" style="width: 100%">
          <tr class="th">
            <th class="strong">Data</th>
            <th class="strong">Início</th>
            <th class="strong">Fim</th>
          </tr>
          <tr>
            <td>{{ item.horario.dia }}</td>
            <td>{{ item.horario.horario_inicio }}</td>
            <td>{{ item.horario.horario_fim }}</td>
          </tr>
        </table>
      </b-card-text>
      <b-button href="#" class="btnCard" @click="agendarAula">
        Agendar
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["materiaSelecionada"],
  data() {
    return {
      aulaHorarios: [],
      title: "",
    };
  },
  methods: {
    agendarAula() {
      this.$http
        // *** Ficar atento para mudar o id do aluno ***
        .post(`/agendamentos/alunos/1`, {
          // *** Ficar atento para mudar o índice de aulaHorarios ***
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
  mounted() {
    this.$http.get("/aulaHorarios").then((response) => {
      this.aulaHorarios = response.data;
    });
  },
};
</script>

<style>
@import "../../style/cards.css";
</style>