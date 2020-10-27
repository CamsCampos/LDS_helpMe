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
              ></b-form-datepicker>
              <p>Data selecionada: {{ dataExtenso }}</p>
            </b-col>
          </b-row>
          <b-form-group label="Filtrar por:">
            <b-row>
              <b-col sm="3">
                <b-form-radio v-model="filtro" name="some-radios" value="Menor"
                  >Menor valor</b-form-radio
                >
              </b-col>

              <b-col sm="3">
                <b-form-radio v-model="filtro" name="some-radios" value="Maior"
                  >Maior valor</b-form-radio
                >
              </b-col>
            </b-row>
            <p>
              Filtragem: <strong>{{ filtro }}</strong>
            </p>
          </b-form-group>

          <!-- Início da div separada para os cards -->
          <div class="text-center">
            <br />
            <h2>Professores disponíveis</h2>
            <hr />
            <br />
            <!-- Cards -->
            <b-card-group deck>
              <b-card img-top class="cardRedondo">
                <div class="testeCardPadding">
                  <img
                    class="teste"
                    src="../../public/img/elipseFaceBackground.svg"
                    alt=""
                  />
                  <b-img
                    v-bind="mainProps"
                    rounded="circle"
                    src="https://placekitten.com/96/139"
                    img-alt="Card image"
                    class="imagemCard"
                  ></b-img>

                  <h4>Prof1</h4>
                  <b-card-text>
                    <b-row class="text-left mt-3 mb-4">
                      <b-col>Matéria: {{ selected }}</b-col>
                      <b-col>Valor: R${{ selected }}</b-col>
                    </b-row>
                    <p class="lead espessuraFonte">Horários disponíveis</p>
                    <b-table
                      class="corTabelaCard"
                      borderless
                      :items="items"
                      :fields="fields"
                    ></b-table>
                  </b-card-text>
                  <b-button href="#" class="btnCor">Agendar</b-button>
                </div>
              </b-card>

              <b-card
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-top
                class="cardRedondo"
              >
                <h4>Prof1</h4>
                <b-card-text>
                  <b-row class="text-left mt-3 mb-4">
                    <b-col>Matéria: {{ selected }}</b-col>
                    <b-col>Valor: R${{ selected }}</b-col>
                  </b-row>
                  <p class="lead espessuraFonte">Horários disponíveis</p>
                  <b-table
                    class="corTabelaCard"
                    borderless
                    :items="items"
                    :fields="fields"
                  ></b-table>
                </b-card-text>
                <b-button href="#" class="btnCor">Agendar</b-button>
              </b-card>
              <b-card
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-top
                class="cardRedondo"
              >
                <h4>Prof1</h4>
                <b-card-text>
                  <b-row class="text-left mt-3 mb-4">
                    <b-col>Matéria: {{ selected }}</b-col>
                    <b-col>Valor: R${{ selected }}</b-col>
                  </b-row>
                  <p class="lead espessuraFonte">Horários disponíveis</p>
                  <b-table
                    class="corTabelaCard"
                    borderless
                    :items="items"
                    :fields="fields"
                  ></b-table>
                </b-card-text>
                <b-button href="#" class="btnCor">Agendar</b-button>
              </b-card>
            </b-card-group>
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
        { value: null, text: "Please select an option" },
        { value: "1", text: "Português" },
        { value: "2", text: "Matemática" },
        { value: "3", text: "História" },
        { value: "4", text: "Geografia" },
        { value: "5", text: "Ciência" },
      ],
      dataExtenso: "",
      filtro: "",
      fields: [{ key: "data", label: "Data" }, "horario"],
      items: [
        { data: "07/09", horario: "10:00 as 11:00" },
        { data: "09/09", horario: "17:30 as 18:30" },
      ],
    };
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

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

.testeFonte {
  font-size: 50px;
  font-weight: 400;
  /* margin-bottom: 0; */
}

.testeCardPadding {
  padding: 0;
}
</style>
