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
                v-model="materiaSelecionada"
                :options="options"
                class="mb-2"
              ></b-form-select>
            </b-col>
            <b-col cols="auto">
              <b-button @click="toPerfil"> Acessar perfil </b-button>
            </b-col>
            <!-- <b-col sm="5">
              <label for="example-datepicker">Data:</label>
              <b-form-datepicker
                id="example-datepicker"
                v-model="dataExtenso"
                class="mb-2"
                placeholder="Selecione a data"
              ></b-form-datepicker>
            </b-col> -->
          </b-row>

          <!-- <b-form-group label="Filtrar por:" class="filtroValor mt-3">
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
          </b-form-group> -->

          <!-- Início da div separada para os cards -->
          <div class="text-center">
            <br />
            <h2>Professores disponíveis</h2>
            <hr />
            <br />
            <b-card-group columns>
              <b-col md="10">
                <Card :materiaSelecionada="materiaSelecionada" />
              </b-col>
            </b-card-group>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from "../components/templates/Card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      materiaSelecionada: null,
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
    };
  },
  methods: {
    toPerfil() {
      this.$router.push("/perfil");
    },
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

.testeFonte {
  font-size: 50px;
  font-weight: 400;
}

.filtroValor {
  color: black;
  margin-left: 0;
}
</style>
